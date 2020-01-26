import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Logo,
  TextInput,
  LoginButton,
  LoginButtonText,
} from './styles';
import logo from '../../assets/logo.png';

export default function Signin({navigation}) {
  function handleLogin() {
    navigation.navigate('Checkin');
  }
  return (
    <Container>
      <Logo source={logo} />
      <TextInput
        placeholderTextColor="#999"
        placeholder="Informe seu ID de cadastro"
        returnKeyType="send"
        keyboardType="numeric"
      />
      <LoginButton onPress={handleLogin}>
        <LoginButtonText>Entrar no sistema</LoginButtonText>
      </LoginButton>
    </Container>
  );
}

Signin.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
};
