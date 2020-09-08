import React from 'react';

import { Container, Option, Title, Img } from './styles';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: '',
    bgColor: '#172C4A',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: '',
    bgColor: '#6A0159',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: '',
    bgColor: '#4139C8',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: '',
    bgColor: '#00AB4B',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: '',
    bgColor: '#BA2F76',
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
        </Option>
      ))}
    </Container>
  );
};
