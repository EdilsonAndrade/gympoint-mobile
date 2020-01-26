import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Signin from './pages/Signin';
import Checkin from './pages/Checkin';
import Dashboard from './pages/Order/Dashboard';
import Answer from './pages/Order/Answer';
import Question from './pages/Order/Question';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Signin,
      Logged: createBottomTabNavigator(
        {
          Checkin,
          Order: createSwitchNavigator(
            {
              Dashboard,
              Answer,
              Question,
            },
            {
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="live-help" size={30} color={tintColor} />
                ),
                activeTintColor: '#ee4d64',
              },
            }
          ),
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            activeTintColor: '#ee4d64',
            inactiveTintColor: '#999',
            style: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        }
      ),
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
    },
    {
      initialRouteName: Signin,
    }
  )
);

export default Routes;
