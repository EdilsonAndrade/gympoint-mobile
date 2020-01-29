import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native';
export const Container = styled.View`
  padding:20px;
  flex:1;
`;

export const OrderTextInput= styled.TextInput`
  width:100%;
  height:250px;
  border-radius:4px;
  background: #fff;
  padding:20px;
  font-size:16px;

`;

export const SendOrderButton = styled(RectButton)`
background: #ee4e62;
border-radius: 4px;
justify-content: center;
align-items: center;
align-self:stretch;
margin-top: 10px;

`;
export const Indicator = styled(ActivityIndicator)`


  padding: 20px;
`;

export const SendOrderButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`;
