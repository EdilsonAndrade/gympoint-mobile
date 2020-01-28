import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
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
  opacity: ${props=>props.disabled ? 0.6 : 1};
`;

export const ButtonNewCheckinText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`;

export const CheckinsList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false
})`
align-self:stretch;

`
export const CheckinContainer = styled.View`
  padding:10px;
  margin: 10px 0;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  background: #fff;
  border-radius:4px;


`;
export const CheckinNumber = styled.Text`
  font-weight:bold;
  font-size:18px;
  color:#444444;
`
export const CheckinTime = styled.Text`
  font-size:16px;
  color:#666;
`
export const CheckinDoneImage = styled.Image`
  width:90px;
  height:90px;
  border-radius:25px;
`;
export const CheckinDoneText = styled.Text`
  font-size:14px;
  color:#999;
  text-align:center;
  margin:10px 0
`
