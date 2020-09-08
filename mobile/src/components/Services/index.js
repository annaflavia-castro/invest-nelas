import React from 'react';

import img08 from '../../images/08.png';
import img09 from '../../images/09.png';
import img10 from '../../images/10.png';
import img12 from '../../images/12.png';
import {
  Container,
  Title,
  Header,
  Service,
  ServiceContent,
  ServiceImg,
  ServiceTitle,
  ServiceDescription,
} from './styles';

const services = [
  {
    img: img08,
    title: 'Scannear QR Code',
    description:
      '',
  },
  {
    img: img10,
    title: 'Cobrar um amigo',
    description: '',
  },
  {
    img: img09,
    title: 'Pagar contas',
    description: '',
  },
  {
    img: img12,
    title: 'Recarga de celular',
    description: '',
  },
];

export default function Services() {
  return (
    <Container>
      <Header>
        <Title>Serviços</Title>
      </Header>
      {services.map(item => (
        <Service key={item.title}>
          <ServiceImg source={item.img} />
          <ServiceContent>
            <ServiceTitle>{item.title}</ServiceTitle>
            <ServiceDescription>{item.description}</ServiceDescription>
          </ServiceContent>
        </Service>
      ))}
    </Container>
  );
};
