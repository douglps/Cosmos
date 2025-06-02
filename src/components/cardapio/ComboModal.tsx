// /components/cardapio/ComboModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import { produtos as allProducts } from "@/data/produtos"; // Importa a lista de todos os produtos
import { Produto } from "@/types"; // Certifique-se de que sua interface Produto está definida

interface ComboModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selection: {
    hamburguerId: string;
    acompanhamentoId: string;
    bebidaId: string;
    sobremesaId?: string; // Agora a sobremesa é opcional
    quantidadeSobremesa?: number; // Quantidade para a sobremesa
    precoFinal: number; // <--- ADICIONE ESTA LINHA AQUI!
  }) => void;
  hamburguerId: string; // ID do hambúrguer base do combo
  basePrice: number; // Preço base do combo
}

export const ComboModal: React.FC<ComboModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  hamburguerId,
  basePrice,
}) => {
  const [selectedAcompanhamentoId, setSelectedAcompanhamentoId] = useState<string>('');
  const [selectedBebidaId, setSelectedBebidaId] = useState<string>('');
  const [selectedSobremesaId, setSelectedSobremesaId] = useState<string>(''); // Novo estado para sobremesa
  const [quantidadeSobremesa, setQuantidadeSobremesa] = useState<number>(0); // Estado para a quantidade da sobremesa

  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [showAlcoholWarning, setShowAlcoholWarning] = useState(false);

  // Busca o nome do hambúrguer base para exibição
  const hamburguerNome = allProducts.find(p => p.id === hamburguerId)?.nome || hamburguerId;

  // Filtra as opções de acompanhamentos, bebidas e sobremesas
  const acompanhamentosOptions: Produto[] = allProducts.filter(p => p.categoria === 'acompanhamentos');
  const bebidasOptions: Produto[] = allProducts.filter(p => p.categoria === 'bebidas');
  const cookieProduto: Produto | undefined = allProducts.find(p => p.id === 'cookie');

  // Nomes dos itens selecionados para o resumo
  const acompanhamentoNome = allProducts.find(p => p.id === selectedAcompanhamentoId)?.nome || '...';
  const bebidaNome = allProducts.find(p => p.id === selectedBebidaId)?.nome || '...';
  const sobremesaNome = (selectedSobremesaId && quantidadeSobremesa > 0) ? (allProducts.find(p => p.id === selectedSobremesaId)?.nome || selectedSobremesaId) : '...';

  // Efeito para resetar os campos quando o modal é fechado
  useEffect(() => {
    if (!isOpen) {
      setSelectedAcompanhamentoId('');
      setSelectedBebidaId('');
      setSelectedSobremesaId('');
      setQuantidadeSobremesa(0);
      setTotalPrice(basePrice);
      setShowAlcoholWarning(false);
    }
  }, [isOpen, basePrice]);

  // Efeito para recalcular o preço total e verificar aviso de álcool
  useEffect(() => {
    let currentTotal = basePrice;

    // Adicional para Acompanhamento
    const acompanhamentoSelecionado = allProducts.find(p => p.id === selectedAcompanhamentoId);
    if (acompanhamentoSelecionado && acompanhamentoSelecionado.id === 'omuamua_gr') {
      currentTotal += 3.0;
    }

    // Adicional para Bebida
    const bebidaSelecionada = allProducts.find(p => p.id === selectedBebidaId);
    if (bebidaSelecionada) {
      const isAlcoholic = ['heineken', 'bela_vista'].includes(bebidaSelecionada.id);
      setShowAlcoholWarning(isAlcoholic);
      if (isAlcoholic) {
        currentTotal += 5.0;
      }
    } else {
      setShowAlcoholWarning(false);
    }

    // Adicional para Sobremesa (Cookie Meteorito)
    if (selectedSobremesaId === 'cookie') { // Verifica se é o Cookie Meteorito
      if (quantidadeSobremesa === 1) {
        currentTotal += 5.0;
      } else if (quantidadeSobremesa === 3) {
        currentTotal += 12.0;
      }
    }

    setTotalPrice(currentTotal);
  }, [selectedAcompanhamentoId, selectedBebidaId, selectedSobremesaId, quantidadeSobremesa, basePrice]);


  const handleConfirm = () => {
    if (selectedAcompanhamentoId && selectedBebidaId) {
      onConfirm({
        hamburguerId,
        acompanhamentoId: selectedAcompanhamentoId,
        bebidaId: selectedBebidaId,
        sobremesaId: selectedSobremesaId || undefined,
        quantidadeSobremesa: quantidadeSobremesa > 0 ? quantidadeSobremesa : undefined,
        precoFinal: totalPrice, // <--- GARANTA QUE ESTÁ PASSANDO O totalPrice AQUI!
      });
      onClose();
    } else {
      alert("Por favor, selecione um acompanhamento e uma bebida.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-2xl w-full max-w-md mx-auto my-auto flex flex-col max-h-[90dvh]">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Monte seu Combo</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl font-light">
            ×
          </button>
        </div>

        {/* Corpo do Modal (com scroll) */}
        <div className="p-4 space-y-6 overflow-y-auto flex-1">
          {/* Hambúrguer */}
          <div>
            <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Hambúrguer</h3>
            <div className="p-3 bg-gray-100 dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-800 dark:text-gray-200 font-medium">{hamburguerNome}</p>
            </div>
          </div>

          {/* Acompanhamento */}
          <div>
            <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Acompanhamento</h3>
            <div className="grid grid-cols-1 gap-2">
              {acompanhamentosOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedAcompanhamentoId(option.id)}
                  className={`
                    p-3 border rounded-lg cursor-pointer transition-all duration-200
                    ${selectedAcompanhamentoId === option.id
                      ? 'bg-amber-500 border-amber-500 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700'
                    }
                  `}
                >
                  <p className="font-medium">{option.nome}</p>
                  <span className={`text-sm ${selectedAcompanhamentoId === option.id ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                    R$ {option.preco.toFixed(2)}
                    {option.id === 'omuamua_gr' && ' (+R$ 3,00)'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bebida */}
          <div>
            <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Bebida</h3>
            <div className="grid grid-cols-1 gap-2">
              {bebidasOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedBebidaId(option.id)}
                  className={`
                    p-3 border rounded-lg cursor-pointer transition-all duration-200
                    ${selectedBebidaId === option.id
                      ? 'bg-amber-500 border-amber-500 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700'
                    }
                  `}
                >
                  <p className="font-medium">{option.nome}</p>
                  <span className={`text-sm ${selectedBebidaId === option.id ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                    R$ {option.preco.toFixed(2)}
                    {['heineken', 'bela_vista'].includes(option.id) && ' (+R$ 5,00)'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sobremesa Opcional - Cards Separados */}
          {cookieProduto && (
            <div>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">Sobremesa (Opcional)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Grid para 2 colunas em telas maiores */}
                {/* Card para 1 Cookie */}
                <div
                  onClick={() => {
                    setSelectedSobremesaId('cookie');
                    setQuantidadeSobremesa(1);
                  }}
                  className={`
                    p-4 border rounded-lg cursor-pointer transition-all duration-200 flex flex-col justify-between items-center text-center
                    ${selectedSobremesaId === 'cookie' && quantidadeSobremesa === 1
                      ? 'bg-green-500 border-green-500 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700'
                    }
                  `}
                >
                  <p className="font-medium text-lg">{cookieProduto.nome}</p>
                  <p className="text-sm">1 unidade</p>
                  <span className={`text-base font-bold mt-2 ${selectedSobremesaId === 'cookie' && quantidadeSobremesa === 1 ? 'text-white' : 'text-lime-600 dark:text-lime-400'}`}>
                    R$ 5,00
                  </span>
                </div>

                {/* Card para 3 Cookies */}
                <div
                  onClick={() => {
                    setSelectedSobremesaId('cookie');
                    setQuantidadeSobremesa(3);
                  }}
                  className={`
                    p-4 border rounded-lg cursor-pointer transition-all duration-200 flex flex-col justify-between items-center text-center
                    ${selectedSobremesaId === 'cookie' && quantidadeSobremesa === 3
                      ? 'bg-green-500 border-green-500 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700'
                    }
                  `}
                >
                  <p className="font-medium text-lg">{cookieProduto.nome}</p>
                  <p className="text-sm">3 unidades</p>
                  <span className={`text-base font-bold mt-2 ${selectedSobremesaId === 'cookie' && quantidadeSobremesa === 3 ? 'text-white' : 'text-lime-600 dark:text-lime-400'}`}>
                    R$ 12,00
                  </span>
                </div>

                {/* Card para desmarcar sobremesa */}
                {(selectedSobremesaId === 'cookie') && (
                  <div
                    onClick={() => {
                      setSelectedSobremesaId('');
                      setQuantidadeSobremesa(0);
                    }}
                    className="sm:col-span-2 p-3 border rounded-lg cursor-pointer transition-all duration-200 text-center
                               bg-red-100 border-red-300 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-800"
                  >
                    <p className="font-medium">Remover Sobremesa</p>
                  </div>
                )}
              </div>
            </div>
          )}


          {/* Aviso sobre bebida alcoólica */}
          {showAlcoholWarning && (
            <div className="p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md">
              <p className="font-bold">ATENÇÃO:</p>
              <p>BEBA COM MODERAÇÃO. PRODUTO PARA MAIORES DE 18 ANOS.</p>
            </div>
          )}
        </div>

        {/* Rodapé Fixo com Resumo e Botão de Confirmação */}
        <div className="sticky bottom-0 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col space-y-3">
          <div className="text-base text-gray-800 dark:text-gray-200">
            <p><strong className="font-bold">Resumo:</strong> {hamburguerNome} + {acompanhamentoNome} + {bebidaNome}
              {(selectedSobremesaId && quantidadeSobremesa > 0) && (
                ` + ${quantidadeSobremesa}x ${sobremesaNome}`
              )}
            </p>
            <p className="text-lg mt-1"><strong className="font-bold">Total:</strong> R$ {totalPrice.toFixed(2)}</p>
          </div>
          <button
            onClick={handleConfirm}
            disabled={!selectedAcompanhamentoId || !selectedBebidaId}
            className={`w-full py-3 px-4 rounded-lg text-lg font-semibold transition-colors duration-200
              ${selectedAcompanhamentoId && selectedBebidaId
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};