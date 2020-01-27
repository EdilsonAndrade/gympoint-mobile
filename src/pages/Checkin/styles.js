import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top:20px;
  padding:20px;

`;

export const ButtonNewCheckin = styled(RectButton)`
  background: #ee4e62;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-self:stretch;
`;

export const ButtonNewCheckinText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px;
`;
