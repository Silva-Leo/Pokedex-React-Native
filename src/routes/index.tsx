import React from 'react';

import {NavigationContainer} from '@react-navigation/native'; //ele que fornece todo contexto de navegação entre as telas 

import Stack from './Stack/index';

export default function(){
    return(
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    )
}