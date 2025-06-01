// CarrinhoContext.tsx (atualizado)

"use client";

import { createContext, useState, ReactNode } from "react";
import { Produto, ItemCarrinho } from "@/types";

interface CarrinhoContextProps {
  itens: ItemCarrinho[];
  total: number;
  quantidadeTotal: number;
  carrinhoAberto: boolean;
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: string, uid?: string) => void;
  limparCarrinho: () => void;
  alterarQuantidade: (id: string, quantidade: number, uid?: string) => void;
  abrirCarrinho: () => void;
  fecharCarrinho: () => void;
  adicionarItemPersonalizado: (
    produto: Produto,
    personalizado: ItemCarrinho['personalizado']
  ) => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(
  undefined
);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarProduto = (produto: Produto) => {
    setItens((prev) => {
      const existente = prev.find(
        (item) => item.produto.id === produto.id && !item.uid
      );
      if (existente) {
        return prev.map((item) =>
          item.produto.id === produto.id && !item.uid
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prev, { produto, quantidade: 1 }];
      }
    });
  };

  const removerProduto = (id: string, uid?: string) => {
  setItens((prev) => {
    if (uid) {
      return prev.filter((item) => item.uid !== uid);
    } else {
      return prev.filter((item) => item.produto.id !== id);
    }
  });
};

  const limparCarrinho = () => setItens([]);

  const alterarQuantidade = (id: string, quantidade: number, uid?: string) => {
  if (quantidade <= 0) {
    removerProduto(id, uid);
    return;
  }
  setItens((prev) =>
    prev.map((item) => {
      if (uid) {
        return item.uid === uid ? { ...item, quantidade } : item;
      } else {
        return item.produto.id === id && !item.uid ? { ...item, quantidade } : item;
      }
    })
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

  const adicionarItemPersonalizado = (
    produto: Produto,
    personalizado: ItemCarrinho['personalizado']
  ) => {
    const uid = `${produto.id}-${personalizado?.hamburguer}-${personalizado?.acompanhamento}-${personalizado?.bebida}`;

    setItens((prev) => {
      const existente = prev.find((item) => item.uid === uid);
      if (existente) {
        return prev.map((item) =>
          item.uid === uid
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            produto: { ...produto, preco: personalizado?.precoFinal ?? produto.preco },
            quantidade: 1,
            personalizado,
            uid,
          },
        ];
      }
    });
  };

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        total,
        quantidadeTotal,
        carrinhoAberto,
        adicionarProduto,
        adicionarItemPersonalizado,
        removerProduto,
        alterarQuantidade,
        abrirCarrinho,
        fecharCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export { CarrinhoContext };