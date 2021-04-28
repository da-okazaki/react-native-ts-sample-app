/* react native */
import React from 'react';
/* react native paper */
import { Provider as PaperProvider } from 'react-native-paper';
/* Navigation */
import Navigation from './navigation';

export default function App() {
  return (
    <PaperProvider>
      <Navigation  />;
    </PaperProvider>
  )
}
