import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Essa feature do projeto administra o número do Pokemon da API, que ao total tem 898. Então impede que valor seja maior que 898 ou menor que 1. 


interface NumeroPokemon {
  value: number;
}


const initialState: NumeroPokemon = {
  value: 1,
};

const NumeroPokemon = createSlice({
  name: 'numero',
  initialState,
  reducers: {
    increment: state => {
      if (state.value > 897) {
        state.value = 898;
        return;
      }
      state.value++;
    },
    decrement: state => {
      if (state.value < 2) {
        return state;
      }
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value + action.payload > 897) {
        state.value = 898;
      } else {
        state.value += action.payload;
      }
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      if ((state.value - action.payload < 2)) {
        state.value = 1;
        return;
      }
      state.value -= action.payload;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset
} = NumeroPokemon.actions;

export default NumeroPokemon.reducer
