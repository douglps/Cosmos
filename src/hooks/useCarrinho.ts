// /hooks/useCarrinho.ts
import { useContext } from 'react';
import { CarrinhoContext } from '@/contexts/CarrinhoContext';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao?: string;
  image?: string;
  categoria?: string;
  personalizado?: boolean;
  itensSelecionados?: {
    hamburguer: string;
    acompanhamento: string;
    bebida: string;
  };
};


export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
}
