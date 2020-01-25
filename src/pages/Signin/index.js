import React from 'react';
import {
  Container,
  Logo,
  TextInput,
  LoginButton,
  LoginButtonText,
} from './styles';
import logo from '../../assets/logo.png';

export default function Signin() {
  return (
    <Container>
      <Logo source={logo} />
      <TextInput
        placeholderTextColor="#999"
        placeholder="Informe seu ID de cadastro"
        returnKeyType="send"
        keyboardType="numeric"
      />
      <LoginButton>
        <LoginButtonText>Entrar no sistema</LoginButtonText>
      </LoginButton>
    </Container>
  );
}
