import React from 'react';

import Route from './routes'

import {Text, View,  useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Route/>
  );
};

export default App;
