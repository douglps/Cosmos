// /components/cardapio/CardProduct.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Produto } from "@/types";
import { useCarrinho } from "@/hooks/useCarrinho";
import { ComboModal } from "@/components/cardapio/ComboModal"; // crie este arquivo como indicado

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
  const { adicionarProduto } = useCarrinho();
  const [isOpen, setIsOpen] = useState(false);
  const [isComboModalOpen, setComboModalOpen] = useState(false);

  const quantidadeNoCarrinho =
    useCarrinho().itens.find((item) => item.produto.id === produto.id)?.quantidade ?? 0;

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

  const handleConfirmCombo = (selection: {
    hamburguer: string;
    acompanhamento: string;
    bebida: string;
  }) => {
    console.log("Combo selecionado:", selection);
    // futura lógica de cálculo/preço/identificação
    adicionarProduto(produto); // Placeholder
    setComboModalOpen(false);
  };

  return (
    <article className="flex flex-col items-center justify-center px-4 py-8 min-w-fit h-auto gap-5">
      <div className="relative flex flex-col justify-center items-center min-h-fit w-full min-w-[300px] bg-white dark:bg-neutral-900 rounded-md shadow-md shadow-stone-700 overflow-hidden transition-transform duration-300 hover:scale-[1.05]">
        {/* Cabeçalho */}
        <header className="w-full text-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 p-3">
          <h2 className="text-2xl font-bebas text-black bg-white/50 tracking-widest text-center">
            {produto.nome}
          </h2>
        </header>

        {/* Imagem */}
        <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 dark:bg-neutral-900">
          {produto.image && (
            <Image
              src={produto.image}
              alt={`Imagem ilustrativa de ${produto.nome}`}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="rounded-sm object-cover p-3"
              priority
            />
          )}
        </div>

        <div className="relative w-full px-2 py-4 flex flex-col items-center justify-between gap-2">
          {/* Adição ao carrinho */}
          <div className="flex gap-3 justify-center items-center">
            <button
              onClick={() => adicionarProduto(produto)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded text-sm"
              aria-label={`Adicionar ${produto.nome} ao carrinho`}
            >
              Adicionar
            </button>
            {quantidadeNoCarrinho > 0 && (
              <p className="text-sm text-amber-600">
                Qtd: {quantidadeNoCarrinho}
              </p>
            )}
          </div>

          {/* Botão de personalização (apenas para combos) */}
          {produto.categoria === "combos" && (
            <button
              className="text-xs border border-amber-500 text-amber-600 px-3 py-1 rounded-full hover:bg-amber-50 transition"
              onClick={() => setComboModalOpen(true)}
            >
              Personalizar Combo
            </button>
          )}

          {/* Badge */}
          <span className="absolute right-21 top-2 text-xs text-neutral-600 dark:text-neutral-300">
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
          {ctaText}
        </button>

        {/* Descrição expandida */}
        <section
          className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-52 opacity-100 p-2" : "max-h-0 opacity-0 p-0"
          }`}
          style={{ willChange: "max-height, opacity, padding" }}
          aria-hidden={!isOpen}
        >
          <ul className="text-sm list-disc list-inside text-justify space-y-1 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-inner">
            {(produto.descriptionItems ?? []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Modal de Personalização */}
      <ComboModal
  isOpen={isComboModalOpen}
  onClose={() => setComboModalOpen(false)}
  onConfirm={handleConfirmCombo}
  hamburguer={produto.nome}
  basePrice={produto.preco}
/>

    </article>
  );
}
