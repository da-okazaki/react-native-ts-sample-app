/* react / react native */
import * as React from 'react';
import { View, Alert } from 'react-native';
/* styles */
import { styles } from 'src/styles/global-styles';
/* constants */
import { BUTTON, ALERT } from 'src/constants/wordConstants';
/* components */
import { Button } from 'src/components/index';

const HomeScreen = ({ navigation }: any) => {
  const onPressAlertDisp = () => {
    Alert.alert(ALERT.buttonPress);
  };

  console.log('navigation', navigation);

  return (
    <View style={styles.container}>
      <Button title={BUTTON.alert} onPress={onPressAlertDisp} />
      <Button
        title='GO TO Second Screen'
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};
export default HomeScreen;
