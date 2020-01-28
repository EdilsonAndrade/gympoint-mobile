import React from 'react';
import {View} from 'react-native';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function Dashboard() {
  return <View />;
}
Dashboard.navigationOptions = {
  header: ()=><Header/>
}
