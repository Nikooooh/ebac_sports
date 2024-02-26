import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Produtos from './containers/Produtos';
import { RootState } from './components/store';
import { fetchProdutos } from './components/api'; 
import { adicionarAoCarrinho, removerDoCarrinho } from './components/Slices/carrinhoSlice';
import { favoritar, removerFavorito } from './components/Slices/favoritosSlice';
import { Produto } from './components/Slices/carrinhoSlice'; 
import { GlobalStyle } from './styles'

const App: React.FC = () => {
  const dispatch = useDispatch();
  const produtos = useSelector((state: RootState) => state.produtos.produtos); 
  const carrinho = useSelector((state: RootState) => state.carrinho.itens);
  const favoritos = useSelector((state: RootState) => state.favoritos);

  useEffect(() => {
    fetchProdutos(dispatch);
  }, [dispatch]);

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto));
  };

  const handleRemoverDoCarrinho = (produtoId: number) => {
    dispatch(removerDoCarrinho({ id: produtoId })); 
  };
  const handleFavoritar = (produto: Produto) => {
    dispatch(favoritar(produto));
  };

  const handleRemoverFavorito = (produtoId: number) => { 
    dispatch(removerFavorito(produtoId)); 
  };

  return (
    <>
       <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos}/>
        <Produtos
          produtos={produtos}
          carrinho={carrinho}
          favoritos={favoritos}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
          removerDoCarrinho={handleRemoverDoCarrinho}
          favoritar={handleFavoritar}
          removerFavorito={handleRemoverFavorito}
        />
      </div>
    </>
  );
}

export default App;
