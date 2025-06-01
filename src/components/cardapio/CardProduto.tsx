// components/cardapio/CardProdutos.tsx

import { useCarrinho } from "@/hooks/useCarrinho"; // Contexto fictício
import { Produto } from "@/types";

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto, itens } = useCarrinho();

  const quantidadeNoCarrinho = itens.find(item => item.produto.id === produto.id)?.quantidade ?? 0;

  return (
    <div className="border rounded p-4 flex flex-col gap-2">
      <h3 className="font-bold text-lg">{produto.nome}</h3>
      <p className="text-sm text-gray-600">{produto.descricao}</p>
      <p className="font-semibold">R$ {produto.preco.toFixed(2)}</p>

      {quantidadeNoCarrinho > 0 && (
        <p className="text-sm text-amber-600">No carrinho: {quantidadeNoCarrinho}</p>
      )}

      <button
        onClick={() => adicionarProduto(produto)}
        className="mt-auto bg-amber-500 hover:bg-amber-600 text-white py-1 rounded"
        aria-label={`Adicionar ${produto.nome} ao carrinho`}
      >
        Adicionar
      </button>
    </div>
  );
}