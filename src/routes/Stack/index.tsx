import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //criando contexto de navegação do tipo stack

import Home from '../../pages/Home/index';

import Login from '../../pages/Login/index'

const { Navigator, Screen } = createNativeStackNavigator()

export default function(){
    return(
        <Navigator initialRouteName='Login'>
            <Screen name='Home' component={Home}/>
            <Screen name='Login' component={Login}/>
        </Navigator>
    )
}

