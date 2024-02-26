import { Dispatch } from 'redux';
import { setProdutos } from './Slices/produtosSlice';
import { Produto } from './Slices/produtosSlice';


export const fetchProdutos = async (dispatch: Dispatch) => {
  try {
    const response = await fetch('https://fake-api-tau.vercel.app/api/ebac_sports');
    const data: Produto[] = await response.json();
    dispatch(setProdutos(data));
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};
