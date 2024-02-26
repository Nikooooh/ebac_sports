import React from 'react';
import { Produto } from '../components/Slices/carrinhoSlice'; 
import * as S from './styles'; 

interface ProdutosProps {
  produtos: Produto[];
  carrinho: Produto[];
  favoritos: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (produtoId: number) => void; 
  favoritar: (produto: Produto) => void;
  removerFavorito: (produtoId: number) => void; 
}

const Produtos: React.FC<ProdutosProps> = ({
  produtos,
  carrinho,
  favoritos,
  adicionarAoCarrinho,
  removerDoCarrinho,
  favoritar,
  removerFavorito,
}) => {
  return (
    <>
     <S.Produtos> 
      {produtos.map((produto, index) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>Preço: {produto.preco}</p>
          <S.ProdutoImagem src={produto.imagem} alt={produto.nome}/>
          <S.Botao onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</S.Botao>
          <S.Botao onClick={() => favoritar(produto)}>Favoritar</S.Botao>
      
          {carrinho.find((item) => item.id === produto.id) && (
            <S.Botao onClick={() => removerDoCarrinho(produto.id)}>Remover do Carrinho</S.Botao>
          )}
     
          {favoritos.find((item) => item.id === produto.id) && (
            <S.Botao onClick={() => removerFavorito(produto.id)}>Remover dos Favoritos</S.Botao>
          )}

          {(index + 1) % 3 === 0 && <br />} 
        </div>
      ))}
   </S.Produtos>
   </>
  );
};

export default Produtos;
