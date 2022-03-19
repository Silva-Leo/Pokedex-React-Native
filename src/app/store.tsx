import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/numeroPokemon/numeroDoPokemon';
import pokemonReducer from "../features/pokemon/pokemonSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        pokemon: pokemonReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;