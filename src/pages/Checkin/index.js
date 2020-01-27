import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, ButtonNewCheckin, ButtonNewCheckinText} from './styles';
export default function Checkin() {

  return (
    <Container>
      <ButtonNewCheckin>
        <ButtonNewCheckinText>Novo check-in</ButtonNewCheckinText>
      </ButtonNewCheckin>
    </Container>
  );
}
Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={30} color={tintColor} />
  ),
};
