import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
`;

export const Logo = styled.Image`
  height: 91px;
  width: 150px;
`;

export const TextInput = styled.TextInput`
  padding: 10px;
  margin: 20px 0;
  border-radius: 4px;
  color: #999999;
  align-self: stretch;
  border: 1px solid #9999;
  font-size: 16px;
`;

export const LoginButton = styled(RectButton)`
  border-radius: 4px;
  align-self: stretch;
  text-align: center;
  background: #ee4d64;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  text-align: center;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
`;
