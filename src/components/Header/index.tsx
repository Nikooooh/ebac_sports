import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styled from 'styled-components';
import { Header as HeaderComponent } from './styles';

import cesta from '../../assets/cesta.png';
interface Produto {
  id: number;
  nome: string;
  preco: number;

}
interface HeaderProps {
  favoritos: Produto[]; 
}

const Header: React.FC<HeaderProps> = ({ favoritos }) => { 
  const carrinho = useSelector((state: RootState) => state.carrinho.itens);

  return (
    <HeaderComponent>
      <div>
        <span>{favoritos.length} favoritos</span> 
        <img src={cesta} alt="Carrinho" />
        <span>{carrinho.length}</span>
      </div>
    </HeaderComponent>
  );
};

export default Header;
