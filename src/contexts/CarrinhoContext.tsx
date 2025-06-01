// components/contexts/CarrinhoContexts.tsx

"use client";

import { createContext, useState, ReactNode } from "react";
import { Produto, ItemCarrinho } from "@/types";

interface CarrinhoContextProps {
  itens: ItemCarrinho[];
  total: number;
  quantidadeTotal: number;
  carrinhoAberto: boolean;
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: string) => void;
  limparCarrinho: () => void;
  alterarQuantidade: (id: string, quantidade: number) => void;
  abrirCarrinho: () => void;
  fecharCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(
  undefined
);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarProduto = (produto: Produto) => {
    setItens((prev) => {
      const existente = prev.find((item) => item.produto.id === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prev, { produto, quantidade: 1 }];
      }
    });
  };

  const removerProduto = (id: string) => {
    setItens((prev) => prev.filter((item) => item.produto.id !== id));
  };

  const limparCarrinho = () => setItens([]);

  const alterarQuantidade = (id: string, quantidade: number) => {
    if (quantidade <= 0) {
      removerProduto(id);
      return;
    }
    setItens((prev) =>
      prev.map((item) =>
        item.produto.id === id ? { ...item, quantidade } : item
      )
    );
  };

  const abrirCarrinho = () => setCarrinhoAberto(true);
  const fecharCarrinho = () => setCarrinhoAberto(false);

  const total = itens.reduce(
    (soma, item) => soma + item.produto.preco * item.quantidade,
    0
  );
  const quantidadeTotal = itens.reduce(
    (soma, item) => soma + item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
  value={{
    itens,
    total,
    quantidadeTotal,
    carrinhoAberto,
    adicionarProduto,
    removerProduto,
    alterarQuantidade,
    abrirCarrinho,
    fecharCarrinho,
    limparCarrinho, // ✅ agora disponível
  }}
>
      {children}
    </CarrinhoContext.Provider>
  );
}
export { CarrinhoContext };