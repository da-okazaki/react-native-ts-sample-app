import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Topbar = ({ navigation, previous }: any) => {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title='Title' />
      <Appbar.Action icon='magnify' onPress={_handleSearch} />
      <Appbar.Action icon='dots-vertical' onPress={_handleMore} />
    </Appbar.Header>
  );
};
export default Topbar;
