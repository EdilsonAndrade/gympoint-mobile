import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {logginSuccess} from '~/store/modules/auth/actions';
import {Alert} from 'react-native';
import api from '~/services/api';
import {
  Container,
  Logo,
  TextInput,
  LoginButton,
  LoginButtonText,
  Loading
} from './styles';
import logo from '../../assets/logo.png';

export default function Signin({navigation}) {

  const dispatch = useDispatch();

  const [studentId,setStudentId] =  useState();
  const [loading, setLoading] = useState(false);


  async function handleLoggin(){
    setLoading(true);
    try {
      if(!studentId){
        Alert.alert('Login', 'Digite sua matricula');
      }else{
        const response = await api.get(`students/${studentId}`);

        if(response.data && response.data.id === +studentId)
        {
         dispatch(logginSuccess());
        }else{
          Alert.alert('Login', 'Matrícula inválida');
          setLoading(false);
        }
      }

    } catch (error) {
      console.tron.warn(error.data.message);
      setLoading(false);
    }


  }
  return (
    <Container>
      <Logo source={logo} />
      <TextInput
        placeholderTextColor="#999"
        placeholder="Informe seu ID de cadastro"
        returnKeyType="send"
        keyboardType="numeric"
        value={studentId}
        onChangeText={setStudentId}
      />
      <LoginButton onPress={handleLoggin}>
        {loading ? (<Loading size={20} color="#fff"></Loading>)
        :  <LoginButtonText>Entrar no sistema</LoginButtonText>
      }

      </LoginButton>
    </Container>
  );
}

Signin.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
};
