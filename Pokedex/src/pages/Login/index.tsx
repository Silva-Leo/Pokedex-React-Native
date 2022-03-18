import React from 'react';
import { useState } from 'react';
import {Text} from 'react-native';
import {Container} from './style';
import { Input } from '../../components/TextInput';
import  { MyButton } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation();

  return (

    <Container>
        <Text style={{fontSize: 20}}>Login</Text>
        <Input placeholder='Escreva seu e-mail..'
        value={email}
        onChangeText={setEmail} />
        <Input placeholder='Escreva sua senha'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}/>

        <MyButton onPress={()=> navigation.navigate('Home')}
        title='Entrar no APP'/>
    </Container>
  );
};

export default Login;
