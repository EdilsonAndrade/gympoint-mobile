import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import pt from 'date-fns/locale/pt';
import {formatRelative, parseISO} from 'date-fns';
import checkinDoneImage from '~/assets/checkinsdone.png'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ButtonNewCheckin, ButtonNewCheckinText, CheckinsList, CheckinContainer, CheckinNumber, CheckinTime, CheckinDoneImage, CheckinDoneText } from './styles';
import Header from '~/components/Header';
import api from '~/services/api';
import sort from 'fast-sort';
export default function Checkin() {
  const userId = useSelector(state => state.auth.userId);
  const [checkins, setCheckins] = useState([]);

  const checkInDisable = useMemo(()=>{return (checkins.length >=5)}
  ,[checkins])

  async function loadCheckins() {
    const response = await api.get(`students/${userId}/checkins`);

    if (response.data.checkinsDone) {
      var orderedData = sort(response.data.checkinsDone.rows).desc(che=>che.id);
      var data = orderedData.map(checkin=>({
        ...checkin,
        checkinDate: formatRelative(parseISO(checkin.createdAt), new Date(),{locale:pt})
        }))
      setCheckins(data);
    }
  }
  useEffect(() => {
    loadCheckins();
  },[])
  async function handleCheckin() {
    if(!checkInDisable)
    {
      const response = await api.post(`students/${userId}/checkins`)
      if (response.data && response.data.checkinsDone) {
        loadCheckins();
      }
    }

  }
  return (
    <Container>
      {!checkInDisable &&(
        <ButtonNewCheckin onPress={handleCheckin} disabled={checkInDisable}>
        <ButtonNewCheckinText>Novo check-in</ButtonNewCheckinText>
        </ButtonNewCheckin>

      )}

      {
        checkInDisable && (
          <>
            <CheckinDoneImage source={checkinDoneImage} />
            <CheckinDoneText >Você ja treinou 5x esta semana, descanso também é treino, volte semana que vem</CheckinDoneText>
          </>
        )
      }

      <CheckinsList
      data={checkins}
      keyExtractor={item=> String(item.id)}
      renderItem={({item: checkin})=>(
          <CheckinContainer key={checkin.id}>
            <CheckinNumber>
              {`Check-in #${checkin.id}`}
            </CheckinNumber>
            <CheckinTime>
              {checkin.checkinDate}
            </CheckinTime>
          </CheckinContainer>

      )} />
    </Container>
  );
}
Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={30} color={tintColor} />
  ),
  header: () => <Header />
};
