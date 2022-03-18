import React from 'react';

import Route from './routes'

import {Text, View,  useColorScheme} from 'react-native';
import { AuthProvider } from './contexts/Auth';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthProvider>
    <Route/>
    </AuthProvider>
  );
};

export default App;
