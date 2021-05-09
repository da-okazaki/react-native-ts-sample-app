/* react */
import React, { FC } from 'react';
import { registerRootComponent } from 'expo';

/* react native paper */
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
/* Navigation */
import Navigation from './src/navigations';

/* Firebase */
import firebase from 'firebase/app';
import { firebaseConfig } from './firebase/config';
firebase.initializeApp(firebaseConfig);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App: FC = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
};
export default registerRootComponent(App);
