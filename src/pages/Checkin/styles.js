import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ButtonNewCheckin = styled(RectButton)`
  background: #ee4e62;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonNewCheckinText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px;
`;
