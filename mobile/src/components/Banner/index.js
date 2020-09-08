import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';
import img10 from '../../images/10.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Sextouuuu bebê!</Title>
        <Description>
          Hoje é dia de breja em dobro no baile do Kevinho. Vem rebolar essa raba e chapar!
        </Description>
      </Details>
      <Img source={img10} />
    </Container>
  );
};
