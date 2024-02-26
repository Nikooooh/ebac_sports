import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './Slices/carrinhoSlice';
import produtosReducer from './Slices/produtosSlice'; 
import favoritosReducer from './Slices/favoritosSlice';

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    produtos: produtosReducer, 
    favoritos: favoritosReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;