import styled from 'styled-components';

export const Produtos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProdutoImagem = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

export const Botao = styled.button`
  background-color: #4CAF50; 
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; 
  }

  & + & {
    margin-left: 8px; 
  }
`;