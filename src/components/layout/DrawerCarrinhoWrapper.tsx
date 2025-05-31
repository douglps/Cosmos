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
  } = useCarrinho();

  return (
    <DrawerCarrinho
      aberto={carrinhoAberto}
      onClose={fecharCarrinho}
      itens={itens}
      onRemover={removerProduto}
      onLimpar={limparCarrinho}
    />
  );
}
