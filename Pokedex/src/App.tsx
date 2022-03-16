import React from 'react';

import Login from './pages/Login/index';

import {Text, View, SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <View>
        <Text>hvjkvhv</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
