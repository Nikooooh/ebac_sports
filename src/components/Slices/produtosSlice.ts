import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

interface ProdutosState {
  produtos: Produto[];
  carrinho: Produto[];
}

const initialState: ProdutosState = {
  produtos: [],
  carrinho: [],
};

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    setProdutos(state, action: PayloadAction<Produto[]>) {
      state.produtos = action.payload;
    },
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      state.carrinho.push(action.payload);
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.carrinho = state.carrinho.filter(produto => produto.id !== action.payload);
    },
  },
});

export const { setProdutos, adicionarAoCarrinho, removerDoCarrinho } = produtosSlice.actions;

export default produtosSlice.reducer;
