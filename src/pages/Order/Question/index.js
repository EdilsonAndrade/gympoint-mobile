import React ,{ useState }from 'react';

import {useSelector} from 'react-redux';
import { Container, OrderTextInput, SendOrderButton, SendOrderButtonText , Indicator} from './styles';
import api from '~/services/api';

export default function Question({navigation}) {
  const studentId = useSelector(state=>state.auth.userId);
  const [loading, setLoading] = useState(false);
  const [order,setOrder] = useState('');
  async function handleOrder(){
    setLoading(true);
      await api.post(`students/${studentId}/help-orders`,{
        question: order
      });

      navigation.navigate('Dashboard');
  }

  return (
    <Container>
        <OrderTextInput textAlignVertical="top" returnKeyType="send" numberOfLines={10} multiline={true} placeholder="Inclua seu pedido de auxílio"
        value={order}
        onChangeText={setOrder}
        ></OrderTextInput>
        <SendOrderButton onPress={handleOrder}>
          {loading ? (<Indicator size={20} color="#FFF'" />) :
          (
            <SendOrderButtonText>Enviar pedido</SendOrderButtonText>
          )}

        </SendOrderButton>
    </Container>
    )
}
