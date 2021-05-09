import * as React from 'react';
import { StyleSheet, Button as ButtonComponent } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
interface Props {
  title: string;
  onPress: () => void;
}
const Button = ({ title, onPress }: Props) => {
  return <PaperButton icon="camera" onPress={onPress}>{title}</PaperButton>;
};
export default Button;
