import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import pt from 'date-fns/locale/pt';
import { formatRelative, parseISO } from 'date-fns';
import {withNavigationFocus} from 'react-navigation';
import api from '~/services/api';
import sort from 'fast-sort';
import {
  Container, ButtonNewQuestion,
  ButtonNewQuestionText,
  Answers, AnswerContainer,
  AnswerOrNotText, AnswerinTime, TopContainer, MyQuestion, IconCheck, IconContent
}
  from './styles';

function Dashboard({ navigation, isFocused }) {
  const [answers, setAnswers] = useState([]);

  const userId = useSelector(state => state.auth.userId);
  async function loadOrder() {
    const response = await api.get(`students/${userId}/help-orders`);

    if (response.data) {
      var orderedData = sort(response.data).desc(order=>order.createdAt);
      const data = orderedData.map(answer=>({
        ...answer,
        formattedDate: answer.createdAt && formatRelative(parseISO(answer.createdAt), new Date(), {locale:pt})
      }))
      setAnswers(data);
    }
  }
  useEffect(() => {

    loadOrder();
  }, [isFocused])
  return (
    <Container>
      <ButtonNewQuestion onPress={() => navigation.navigate('Question')} >
        <ButtonNewQuestionText>Novo pedido de auxílio</ButtonNewQuestionText>
      </ButtonNewQuestion>

      <Answers
        data={answers}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: answer }) => (
          <AnswerContainer disabled={!answer.answer} onPress={()=>navigation.navigate('Answer',{answer})}  key={answer.id}>
            <TopContainer >
              <IconContent>
                <IconCheck name="check-circle" answered={answer.answer} size={20} color="#666" />
                <AnswerOrNotText>{answer.answerAt !== null ? 'Respondida' : 'Sem resposta'}</AnswerOrNotText>
              </IconContent>

        <AnswerinTime>{answer.formattedDate}</AnswerinTime>
            </TopContainer>
            <MyQuestion>{answer.question}</MyQuestion>
          </AnswerContainer>

        )} />
    </Container>
  );

}
export default withNavigationFocus(Dashboard);
