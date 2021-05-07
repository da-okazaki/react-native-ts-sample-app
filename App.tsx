/* react native */
import React from 'react';
/* react native paper */
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
/* Navigation */
import Navigation from './navigation';
import { HomeScreen } from './screen';

/* Firebase */
import firebase from "firebase/app";
import { firebaseConfig } from "./firebase/config"
firebase.initializeApp(firebaseConfig);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}

export default function App() {
  return (
    <Navigation  />
  )
}

/**
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation  />;
    </PaperProvider>
  )
}
 */
