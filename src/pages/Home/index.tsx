import React from 'react';
import {View, Text} from 'react-native';

import ListaPokemon from '../../components/ListaPokemon';
import {Provider} from 'react-redux';
import {store} from '../../app/store';

const Home = () => {
  return (
    <Provider store={store}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <ListaPokemon />
      </View>
    </Provider>
  );
};

export default Home;
