// /components/cardapio/CombosCard.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Produto } from "@/types";
import { useCarrinho } from "@/hooks/useCarrinho";
import { ComboModal } from "@/components/cardapio/ComboModal";
import { produtos as allProducts } from "@/data/produtos"; // Importa todos os produtos para buscar nomes/preços

type FeatureCardProps = {
  produto: Produto;
  ctaText?: string;
  badgeLabel?: string;
};

export function CombosCard({
  produto,
  ctaText = "Ver mais",
  badgeLabel = "A partir de",
}: FeatureCardProps) {
  const { adicionarProduto, adicionarItemPersonalizado, itens } = useCarrinho();
  const [isOpen, setIsOpen] = useState(false);
  const [isComboModalOpen, setComboModalOpen] = useState(false);

  // Calcula a quantidade do produto base (não personalizado) no carrinho
  const quantidadeNoCarrinhoBase =
    itens.find((item) => item.produto.id === produto.id && !item.uid)
      ?.quantidade ?? 0;

  // Calcula a quantidade total de *todas as versões* do combo (base + personalizadas)
  const quantidadeTotalDoCombo = itens.reduce((total, item) => {
    if (item.produto.id === produto.id) {
      // Verifica se é o mesmo produto base
      return total + item.quantidade;
    }
    return total;
  }, 0);

  const [animationStyles, setAnimationStyles] =
    useState<React.CSSProperties | null>(null);

  useEffect(() => {
    const delay = `${(Math.random() * 2).toFixed(2)}s`;
    const duration = `1s`;
    setAnimationStyles({
      animationDelay: delay,
      animationDuration: duration,
    });
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // NOVO: Função para abrir o modal de personalização
  const handleOpenComboModal = () => {
    setComboModalOpen(true);
  };

  // NOVO: Função para fechar o modal de personalização
  const handleCloseComboModal = () => {
    setComboModalOpen(false);
  };

  // Função chamada pelo ComboModal ao confirmar a personalização
  const handleConfirmCombo = (selection: {
    hamburguerId: string; // Renomeado para Id
    acompanhamentoId: string; // Renomeado para Id
    bebidaId: string; // Renomeado para Id
  }) => {
    // Busca os *nomes* reais dos produtos para exibição no carrinho
    const nomeHamburguer =
      allProducts.find((p) => p.id === selection.hamburguerId)?.nome ||
      selection.hamburguerId;
    const nomeAcompanhamento =
      allProducts.find((p) => p.id === selection.acompanhamentoId)?.nome ||
      selection.acompanhamentoId;
    const nomeBebida =
      allProducts.find((p) => p.id === selection.bebidaId)?.nome ||
      selection.bebidaId;

    // Lógica para calcular o preço final do combo personalizado
    // Você precisa ajustar esta lógica conforme seu modelo de negócios:
    // Opção 1: Preço fixo do combo, as personalizações não alteram o preço.
    // const precoFinalCalculado = produto.preco;

    // Opção 2: O preço do combo é a soma dos preços dos itens selecionados.
    const precoHamburguer =
      allProducts.find((p) => p.id === selection.hamburguerId)?.preco || 0;
    const precoAcompanhamento =
      allProducts.find((p) => p.id === selection.acompanhamentoId)?.preco || 0;
    const precoBebida =
      allProducts.find((p) => p.id === selection.bebidaId)?.preco || 0;
    const precoFinalCalculado =
      precoHamburguer + precoAcompanhamento + precoBebida;

    // Chamar adicionarItemPersonalizado do CarrinhoContext
    adicionarItemPersonalizado(produto, {
      // Passa o produto base do combo
      hamburguer: nomeHamburguer,
      acompanhamento: nomeAcompanhamento,
      bebida: nomeBebida,
      precoFinal: precoFinalCalculado, // Preço final calculado
    });

    handleCloseComboModal(); // Fecha o modal após adicionar ao carrinho
  };

  return (
    <article className="flex flex-col items-start justify-items-start px-4 py-8 min-w-fit h-auto gap-5">
      <div className="relative flex flex-col justify-center items-center min-h-fit w-full min-w-[280px] bg-white dark:bg-neutral-900 rounded-md shadow-md shadow-stone-700 overflow-hidden transition-transform duration-300 hover:scale-[1.05]">
        {/* Cabeçalho */}
        <header className="w-full text-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 p-3">
          <h2 className="text-2xl font-bebas text-black bg-white/50 tracking-widest text-center">
            {produto.nome}
          </h2>
        </header>

        {/* Imagem */}
        <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 dark:bg-neutral-900 border border-black/40 rounded-md">
          {produto.image && (
            <Image
              src={produto.image}
              alt={`Imagem ilustrativa de ${produto.nome}`}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="rounded-md object-cover p-3 bg-white"
              priority
            />
          )}
        </div>

        <div className="relative w-full px-2 py-4 flex flex-col items-start gap-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 dark:bg-neutral-900">
          {/* Adição ao carrinho para produtos não-combo ou a versão base do combo */}
          {produto.categoria !== "combos" && ( // Apenas mostra o botão "Adicionar" para não-combos
            <div className="flex gap-3 items-start">
              <button
                onClick={() => adicionarProduto(produto)}
                className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 min-w-fit rounded text-sm"
                aria-label={`Adicionar ${produto.nome} ao carrinho`}
              >
                Adicionar
              </button>
              {quantidadeNoCarrinhoBase > 0 && ( // Mostra a quantidade apenas para a versão base
                <p className="text-sm text-amber-600">
                  Qtd: {quantidadeNoCarrinhoBase}
                </p>
              )}
            </div>
          )}

          {/* Botão de personalização (apenas para combos) */}
          {produto.categoria === "combos" && (
            <>
              <button
                className="bg-red-700 hover:bg-red-900 items-start text-white hover:shadow-lg hover:drop-shadow-stone-400 px-3 py-1 rounded text-sm tracking-widest" // Estilo similar ao "Adicionar"
                onClick={handleOpenComboModal} // Abre o modal de personalização
              >
                EU QUERO!
              </button>
              {/* Quantidade total de todas as versões do combo */}
              {quantidadeTotalDoCombo > 0 && (
                <p className="text-sm text-amber-600">
                  Qtd Total: {quantidadeTotalDoCombo}
                </p>
              )}
            </>
          )}

          {/* Badge */}
          <span className="absolute right-21 top-2 text-xs text-neutral-800">
            {badgeLabel}
          </span>

          {/* Preço */}
          <div
            className="absolute -top-3 right-4 flex flex-col items-center justify-center bg-lime-500 text-black rounded-full w-16 h-16 shadow-md animate-bounce"
            style={animationStyles ?? {}}
          >
            <span className="text-[10px] font-light">R$</span>
            <span className="text-lg font-bold">
              {produto.preco.toFixed(2)}
            </span>
          </div>
        </div>

        <div>{produto.descricao}</div>

        <button
          className="text-xs border m-4 border-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          {isOpen ? "Ver menos" : ctaText}{" "}
          {/* Altera o texto com base no estado isOpen */}
        </button>

        {/* Descrição expandida */}
        <section
          className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-52 opacity-100 p-2" : "max-h-0 opacity-0 p-0"
          }`}
          style={{ willChange: "max-height, opacity, padding" }}
          aria-hidden={!isOpen}
        >
          <ul className="text-[12px] list-disc list-inside text-justify space-y-2 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-inner">
            {(produto.descriptionItems ?? []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Modal de Personalização do Combo */}
      {produto.categoria === "combos" && ( // Garante que o modal só aparece para combos
        <ComboModal
          isOpen={isComboModalOpen}
          onClose={handleCloseComboModal}
          onConfirm={handleConfirmCombo}
          hamburguerId={"burger_mercurio"} // ATENÇÃO: Defina o ID do hambúrguer base do combo aqui
          basePrice={produto.preco} // Preço base do combo
        />
      )}
    </article>
  );
}
