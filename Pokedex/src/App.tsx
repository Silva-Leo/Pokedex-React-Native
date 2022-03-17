import React from 'react';

import Home from './pages/Home/index';

import Login from './pages/Login/index';

import {Text, View,  useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Home/>
  );
};

export default App;
