// components/DrawerCarrinho.tsx
import { ItemCarrinho } from "@/types";

interface DrawerCarrinhoProps {
  aberto: boolean;
  onClose: () => void;
  itens: ItemCarrinho[];
  onRemover: (id: string, uid?: string) => void;
  onLimpar: () => void;
  onAdicionar?: (id: string) => void;
  onAlterarQuantidade: (id: string, quantidade: number, uid?: string) => void;
}

export function DrawerCarrinho({
  aberto,
  onClose,
  itens = [],
  onRemover,
  onLimpar,
  onAlterarQuantidade,
}: DrawerCarrinhoProps) {
  const total = itens.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );

  return (
    <>
      {/* Fundo */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity z-10 ${
          aberto ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 bg-white dark:bg-gray-800 shadow-xl transform transition-transform ${
          aberto ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Seu Carrinho
          </h2>
          <button
            aria-label="Fechar carrinho"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {itens.length === 0 && (
            <p className="text-gray-600 dark:text-gray-400">Seu carrinho está vazio.</p>
          )}

{itens.map((item) => (
  <div
    key={item.uid ?? item.produto.id}
    className="flex flex-col gap-1 border-b border-gray-200 dark:border-gray-700 pb-2"
  >
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">{item.produto.nome}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          R$ {item.produto.preco.toFixed(2)} cada
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onAlterarQuantidade(item.produto.id, item.quantidade - 1, item.uid)}
          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
        >
          -
        </button>
        <span className="min-w-[24px] text-center font-medium text-gray-900 dark:text-gray-100">
          {item.quantidade}
        </span>
        <button
          onClick={() => onAlterarQuantidade(item.produto.id, item.quantidade + 1, item.uid)}
          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
        >
          +
        </button>
        <span className="font-semibold text-gray-900 dark:text-gray-100 ml-2">
          R$ {(item.produto.preco * item.quantidade).toFixed(2)}
        </span>
        <button
          onClick={() => onRemover(item.produto.id, item.uid)}
          className="text-red-600 hover:text-red-800 ml-2"
        >
          ✕
        </button>
      </div>
    </div>

    {item.personalizado && (
      <ul className="text-xs text-gray-500 dark:text-gray-400 mt-1 list-disc list-inside">
        <li>Hambúrguer: {item.personalizado.hamburguer}</li>
        <li>Acompanhamento: {item.personalizado.acompanhamento}</li>
        <li>Bebida: {item.personalizado.bebida}</li>
      </ul>
    )}
  </div>
))}

        </div>

        {/* Rodapé */}
        {itens.length > 0 && (
          <div className="p-4 border-t border-gray-300 dark:border-gray-700">
            <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
              Total: R$ {total.toFixed(2)}
            </p>
            <button
              onClick={onLimpar}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
            >
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
