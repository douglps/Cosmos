// components/layout/DrawerCarrinhoWrapper.tsx

"use client";

import { DrawerCarrinho } from "@/components/cardapio/DrawerCarrinho";
import { useCarrinho } from "@/hooks/useCarrinho";

export function DrawerCarrinhoWrapper() {
  const {
    carrinhoAberto,
    fecharCarrinho,
    itens,
    removerProduto,
    limparCarrinho,
    adicionarProduto,
    alterarQuantidade,
  } = useCarrinho();

  return (
    <DrawerCarrinho
      aberto={carrinhoAberto}
      onClose={fecharCarrinho}
      itens={itens}
      onRemover={removerProduto}
      onLimpar={limparCarrinho}
      onAdicionar={(id) => {
        const item = itens.find((item) => item.produto.id === id);
        if (item) adicionarProduto(item.produto);
      }}
      onAlterarQuantidade={alterarQuantidade}
    />
  );
}
