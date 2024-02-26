import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Produto {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
  }
  
const initialState: Produto[] = [];

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar(state, action: PayloadAction<Produto>) {
      state.push(action.payload);
    },
    removerFavorito(state, action: PayloadAction<number>) {
      return state.filter((produto) => produto.id !== action.payload);
    },
  },
});

export const { favoritar, removerFavorito } = favoritosSlice.actions;

export default favoritosSlice.reducer;
