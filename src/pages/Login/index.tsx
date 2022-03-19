import React from 'react';
import {useState} from 'react';
import {Text} from 'react-native';
import {Container} from './style';
import {Input} from '../../components/TextInput';
import {MyButton} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground, StyleSheet} from 'react-native';


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    input:{
      flexDirection:'column',
      marginTop:9,
      height: 50,
      justifyContent:'center',
      alignItems:'center'
    }
  });

  return (
    <ImageBackground
      source={require('../../img/fundo-login.jpg')}
      style={styles.imageBackground}
      resizeMode="cover">
        <Container>
         <Text style={{fontSize: 20}}>Faça seu login</Text>
        <Input
          placeholder="Escreva seu e-mail.."
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Input
          placeholder="Escreva sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
        <MyButton
          onPress={() => navigation.navigate('Home')}
          title="Entrar no APP"
        />
        </Container>
     </ImageBackground>
  );
};

export default Login;
