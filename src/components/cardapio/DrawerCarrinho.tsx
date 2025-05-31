import { ItemCarrinho } from "@/types";

// interface ProdutoCarrinho {
//   id: string;
//   nome: string;
//   preco: number;
//   quantidade: number;
// }

interface DrawerCarrinhoProps {
  aberto: boolean;
  onClose: () => void;
  itens: ItemCarrinho[];
  onRemover: (id: string) => void;
  onLimpar: () => void;
}

export function DrawerCarrinho({
  aberto,
  onClose,
  itens=[],
  onRemover,
  onLimpar,
}: DrawerCarrinhoProps) {
  // Calcula total
  const total = itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);

  return (
    <>
      {/* Fundo semi-transparente */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md  transition-opacity z-10 ${
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

          {itens.map(({ produto, quantidade }) => (
  <div
    key={produto.id}
    className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2"
  >
    <div>
      <p className="font-semibold text-gray-900 dark:text-gray-100">{produto.nome}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {quantidade} × R$ {produto.preco.toFixed(2)}
      </p>
    </div>

    <div className="flex items-center gap-3">
      <p className="font-semibold text-gray-900 dark:text-gray-100">
        R$ {(produto.preco * quantidade).toFixed(2)}
      </p>
      <button
        onClick={() => onRemover(produto.id)}
        aria-label={`Remover ${produto.nome} do carrinho`}
        className="text-red-600 hover:text-red-800 transition"
      >
        ✕
      </button>
    </div>
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
