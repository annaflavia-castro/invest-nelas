import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles'; 

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
          ? ['#fff', '#fff']
          : ['#514abf', '#ff5470']
        }
        start={[1, 0.2]}
        >
        <MaterialIcons
          name='keyboard-voice'
          size={30}
          color={focused ? "#fff" : "#fff"} />
        <Label focused={focused}>Cantar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
};
