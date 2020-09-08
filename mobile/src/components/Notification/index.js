import React from 'react';

import {
  Notification,
  NotificationItem,
  Message,
  Date,
} from './styles';

const items = [
  {
    key: String(Math.random()),
    message: '',
    date: 'Ontem às 19:45',
  },
  {
    key: String(Math.random()),
    message: '',
    date: 'Ontem às 11:14',
  },
  {
    key: String(Math.random()),
    message: '',
    date: 'Quarta-feira às 15:03',
  }
];

export default function Notifications() {
  return (
    <Notification>
      {items.map((item) => (
        <NotificationItem key={item.key}>
          <Message>{item.message}</Message>
          <Date>{item.date}</Date>
        </NotificationItem>
      ))}
    </Notification>
  );
};

