import React from 'react';
import logo from '~/assets/logo.png'
import {Text} from 'react-native';
import { Container, ImageContent, HeaderText } from './styles';

export default function Header() {
  return (
    <Container>
      <ImageContent source={logo} />
      <HeaderText>Header</HeaderText>
    </Container>
  );
}
