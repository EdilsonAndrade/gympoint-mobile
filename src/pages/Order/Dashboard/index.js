import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import {
  Container, ButtonNewCheckin,
  ButtonNewCheckinText,
  Answers, AnswerContainer,
  AnswerOrNotText,
  AnswerinTime
}
  from './styles';

export default function Dashboard() {
  const [answers, setAnswers] = useState([]);

  const userId = useSelector(state => state.auth.userId);
  return (
    <Container>
      <ButtonNewCheckin >
        <ButtonNewCheckinText>Novo pedido de auxílio</ButtonNewCheckinText>
      </ButtonNewCheckin>

      <Answers
        data={answers}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: answers }) => (
          <AnswerContainer key={answers.id}>

          </AnswerContainer>

        )} />
    </Container>
  );

}
