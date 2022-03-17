import React, {useEffect, useState} from 'react';

import { Text, View } from 'react-native';

import { PokemonClient }from 'pokenode-ts';

import { useAppDispatch, useAppSelector} from '../app/hooks'

import { setPokemon } from '../features/pokemon/pokemonSlice';

import { increment, decrement, incrementByAmount, decrementByAmount } from '../features/numeroPokemon/numeroDoPokemon';

import Pokemon, {Stats} from '../models/Pokemon';


const ListaPokemon = ()=>{
    useEffect(()=>{
        const fetchPokemon = async ()=>{
            const api = new PokemonClient();
            await api.getPokemonById(4)
            .then(pokemon =>{
                const currentPokemonStats: Stats = {
                    hp:pokemon.stats[0].base_stat,
                    attack:pokemon.stats[0].base_stat,
                    defense:pokemon.stats[0].base_stat,
                    specialAttack:pokemon.stats[0].base_stat,
                    specialDefense:pokemon.stats[0].base_stat,
                    speed:pokemon.stats[0].base_stat,
                }
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