import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top:20px;
  padding:20px;

`;

export const ButtonNewQuestion = styled(RectButton)`
  background: #ee4e62;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-self:stretch;
  opacity: ${props=>props.disabled ? 0.6 : 1};
`;


export const ButtonNewQuestionText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`;

export const Answers = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false
})`
align-self:stretch;

`
export const AnswerContainer = styled(TouchableOpacity)`
  padding:10px;
  margin: 10px 0;
  align-items:center;
  background: #fff;
  border-radius:4px;


`;


export const TopContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-self:stretch;

`

export const AnswerOrNotText = styled.Text`
  font-weight:bold;
  font-size:18px;
  color:#444444;
`

export const IconContent = styled.View`
  flex-direction:row;
  align-items:center;
  margin: 10px 0;
`;
export const IconCheck = styled(Icon)`
  color:${props=>props.answered ? "#42cb59" : "#999"};
  margin-right:5px;
`;
export const AnswerinTime = styled.Text`
  font-size:16px;
  color:#666;

`

export const MyQuestion = styled.Text``;
