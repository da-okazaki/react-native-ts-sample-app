
/* react / react native */
import * as React from 'react';
import { View, Alert } from 'react-native';
/* styles */
import { styles } from "../styles/global-styles";
/* constants */
import { BUTTON, ALERT } from "../constants/wordConstants";
/* components */
import { Button } from '../components/index';

const HomeScreen = ({ navigation }: any) => {
  const onPressAlertDisp = () => {
    Alert.alert(ALERT.buttonPress);
  };

  console.log("navigation", navigation);

  return (
    <View style={styles.container}>
      <Button title={BUTTON.alert} onPress={onPressAlertDisp}/>
      <br />
      <Button
        title="GO TO Second Screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  )
};
export default HomeScreen;
