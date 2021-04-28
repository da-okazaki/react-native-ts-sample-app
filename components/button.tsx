import * as React from 'react';
import { StyleSheet, Button as ButtonComponent } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}
const Button = ({ title, onPress }: Props) => {
  return (
    <ButtonComponent title={title} onPress={onPress} />
  )
}
export default Button;
