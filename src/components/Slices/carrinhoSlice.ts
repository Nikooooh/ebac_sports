import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export interface CarrinhoState {
  itens: Produto[];
}

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      state.itens.push(action.payload);
    },
    removerDoCarrinho(state, action: PayloadAction<{ id: number }>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;

export const selectCarrinho = (state: RootState) => state.carrinho.itens;

export default carrinhoSlice.reducer;
