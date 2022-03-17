import React from 'react';

import Login from './pages/Login/index';

import {Text, View,  useColorScheme} from 'react-native';

import ListaPokemon from './components/ListaPokemon';
import { Provider } from 'react-redux';
import {store} from  './app/store'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <View>
          <ListaPokemon/>
      </View>
    </Provider>
  );
};

export default App;
