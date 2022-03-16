import React, {useEffect, useState} from 'react';

import { Text, View } from 'react-native';

import { PokemonClient }from 'pokenode-ts';

const ListaPokemon = ()=>{
    useEffect(()=>{
        const fetchPokemon = async ()=>{
            const api = new PokemonClient();
            await api.getPokemonById(4)
            .then(pokemon =>{
                console.log(pokemon);
            })
            .catch(err=>{
                console.log(err);
            })
            // await api.getPokemonSpeciesByName
            // tamanho / habilidade / genero 
        };
        fetchPokemon();
    });


    <View>
        <Text>
            LIsta aqui
        </Text>
    </View>
}

export default ListaPokemon;