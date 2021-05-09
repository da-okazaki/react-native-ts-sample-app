import * as React from 'react';
import { Drawer as DrawerMenu } from 'react-native-paper';

const Drawer: React.FC = () => {
  const [active, setActive] = React.useState('');

  return (
    <DrawerMenu.Section title='Some title'>
      <DrawerMenu.Item
        label='First Item'
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <DrawerMenu.Item
        label='Second Item'
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </DrawerMenu.Section>
  );
};
export default Drawer;
