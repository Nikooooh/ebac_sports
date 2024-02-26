import React from 'react';
import { Produto } from '../Slices/carrinhoSlice';
import * as S from './styles'
type Props = {
  produto: Produto;
  estaNosFavoritos: boolean;
  favoritar: (produto: Produto) => void;
  aoComprar: (produto: Produto) => void;
  removerFavorito: (produto: Produto) => void;
  removerDoCarrinho: (produtoId: number) => void;
};

const ProdutoComponent: React.FC<Props> = ({
  produto,
  estaNosFavoritos,
  favoritar,
  aoComprar,
  removerFavorito,
  removerDoCarrinho,
}) => {
  return (
    <S.Produto>
      <S.Capa>
      <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}</S.BtnComprar>
     <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
      <S.BtnComprar onClick={() => removerFavorito(produto)}>Remover Favorito</S.BtnComprar>
      <S.BtnComprar onClick={() => removerDoCarrinho(produto.id)}>Remover do Carrinho</S.BtnComprar>
    </S.Produto>
  
    
  );
};

export default ProdutoComponent;
