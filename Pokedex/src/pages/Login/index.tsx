import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import {Container} from './style';

const Login = () => {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 20}}>Login</Text>
      </View>
    </Container>
  );
};

export default Login;
