import React from 'react';
import {View} from 'react-native';

import { Container, Content,AnswerText, QuestionStatic, Time, AnswerTextInput, AnswerStatic } from './styles';

export default function Answer({navigation}) {

  const answer = navigation.getParam('answer');

  return(
  <Container>

    <Content>
      <QuestionStatic>Pergunta</QuestionStatic>
      <Time>{answer.formattedDate}</Time>

    </Content>
    <AnswerText >{answer.question}</AnswerText>
    <AnswerStatic>Resposta</AnswerStatic>
    <AnswerTextInput>{answer.answer}</AnswerTextInput>
  </Container>);
}
