import React from 'react';

import Login from './pages/Login/index';

import {Text, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <Login/>
    <View>
      <Text>hvjkvhv</Text>
    </View>
    </>
  );
};

export default App;
