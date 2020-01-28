import React from 'react';
import logoheader from '~/assets/logoheader.png'
import { Container, ImageContent, HeaderText } from './styles';

export default function Header() {
  return (
    <Container>
      <ImageContent source={logoheader} />

    </Container>
  );
}
