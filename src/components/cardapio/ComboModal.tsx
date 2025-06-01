import React, { useState, useEffect } from 'react';

interface ComboModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selection: {
    hamburguer: string;
    acompanhamento: string;
    bebida: string;
  }) => void;
  hamburguer: string;
  basePrice: number;
}

export const ComboModal: React.FC<ComboModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  hamburguer,
  basePrice,
}) => {
  const [acompanhamento, setAcompanhamento] = useState('');
  const [bebida, setBebida] = useState('');
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [showAlcoholWarning, setShowAlcoholWarning] = useState(false);

  useEffect(() => {
    // Atualiza o preço total com base nas seleções
    let additional = 0;
    if (acompanhamento === 'Batata Oumuamua Grande') additional += 3.0;
    if (['Heineken', 'BelaVista'].includes(bebida)) additional += 5.0;
    setTotalPrice(basePrice + additional);

    // Verifica se a bebida selecionada é alcoólica
    setShowAlcoholWarning(['Heineken', 'BelaVista'].includes(bebida));
  }, [acompanhamento, bebida, basePrice]);

  const handleConfirm = () => {
    if (acompanhamento && bebida) {
      onConfirm({ hamburguer, acompanhamento, bebida });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-dvh pt-35 pb-10 bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-full max-w-md mx-4 relative">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Personalize seu Combo</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            ×
          </button>
        </div>

        {/* Corpo */}
        <div className="p-4 space-y-4">
          {/* Hambúrguer */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Hambúrguer</h3>
            <p className="text-gray-800 dark:text-gray-200">{hamburguer}</p>
          </div>

          {/* Acompanhamento */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Acompanhamento</h3>
            <div className="space-y-2">
              {['Batata Oumuamua Média', 'Batata Oumuamua Grande'].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="acompanhamento"
                    value={option}
                    checked={acompanhamento === option}
                    onChange={() => setAcompanhamento(option)}
                  />
                  <span className="text-gray-800 dark:text-gray-200">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bebida */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Bebida</h3>
            <div className="space-y-2">
              {/* Refrigerantes */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Refrigerante (350ml)</p>
                {['Coca', 'Coca Zero', 'Fanta Laranja', 'Sprite', 'Kuat'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="bebida"
                      value={option}
                      checked={bebida === option}
                      onChange={() => setBebida(option)}
                    />
                    <span className="text-gray-800 dark:text-gray-200">{option}</span>
                  </label>
                ))}
              </div>

              {/* Cervejas */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cerveja (473ml)</p>
                {['Heineken', 'BelaVista'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="bebida"
                      value={option}
                      checked={bebida === option}
                      onChange={() => setBebida(option)}
                    />
                    <span className="text-gray-800 dark:text-gray-200">{option}</span>
                  </label>
                ))}
              </div>

              {/* Águas */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Água (500ml)</p>
                {['Com gás', 'Sem gás'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="bebida"
                      value={option}
                      checked={bebida === option}
                      onChange={() => setBebida(option)}
                    />
                    <span className="text-gray-800 dark:text-gray-200">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Aviso sobre bebida alcoólica */}
          {showAlcoholWarning && (
            <div className="mt-4 p-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
              <p><strong>BEBA COM MODERAÇÃO</strong></p>
              <p><strong>PRODUTO PARA MAIORES DE 18 ANOS</strong></p>
            </div>
          )}
        </div>

        {/* Rodapé Fixo */}
        <div className="sticky bottom-0 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col space-y-2">
          <div className="text-sm text-gray-800 dark:text-gray-200">
            <strong>Resumo:</strong> {hamburguer} + {acompanhamento || '...'} + {bebida || '...'}
          </div>
          <div className="text-sm text-gray-800 dark:text-gray-200">
            <strong>Total:</strong> R$ {totalPrice.toFixed(2)}
          </div>
          <button
            onClick={handleConfirm}
            disabled={!acompanhamento || !bebida}
            className={`w-full py-2 px-4 rounded ${
              acompanhamento && bebida
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
