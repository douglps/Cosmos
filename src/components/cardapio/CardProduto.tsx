// components/cardapio/CardProduto.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Produto } from "@/types"; // Assumindo que Produto agora tem 'image' e 'descriptionItems'
import { useCarrinho } from "@/hooks/useCarrinho";
import { ScrollHint } from "../common/ScrollHint"; // Assumindo o caminho correto para ScrollHint

interface CardProdutoProps {
  produto: Produto;
  // ctaText?: string; // Opcional, com valor padrão
  badgeLabel?: string; // Opcional, com valor padrão
}

export function CardProduto({
  produto,
  // ctaText = "Ver detalhes", // Valor padrão mais genênico
  badgeLabel = "Preço", // Valor padrão mais genérico
}: CardProdutoProps) {
  const { adicionarProduto, itens } = useCarrinho();
  const [isOpen, setIsOpen] = useState(false);

  const quantidadeNoCarrinho =
    itens.find((item) => item.produto.id === produto.id)?.quantidade ?? 0;

  const [animationStyles, setAnimationStyles] =
    useState<React.CSSProperties | null>(null);

  useEffect(() => {
    const delay = `${(Math.random() * 2).toFixed(2)}s`;
    const duration = `${(3 + Math.random() * 3).toFixed(2)}s`;
    setAnimationStyles({
      animationDelay: delay,
      animationDuration: duration,
    });
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Usa produto.descriptionItems se existir, caso contrário, usa produto.descricao
  const currentDescriptionItems =
    produto.descriptionItems && produto.descriptionItems.length > 0
      ? produto.descriptionItems
      : [produto.descricao]; // Garante que é sempre um array para o map

  return (
    <article className="flex flex-col items-start justify-items-start px-4 py-8 min-w-fit h-auto gap-5 ">
      <div className="flex flex-col h-auto w-full rounded-md bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 shadow-md shadow-stone-700 min-w-[270px] max-w-[300px] transition-transform duration-300 hover:scale-[1.05]">
        <h2 className="p-1 m-1 text-2xl text-black tracking-widest font-bebas bg-white/50 text-center">
          {produto.nome}
        </h2>

        <div className="relative flex flex-row justify-between pl-4 pr-4">
          <span className="absolute text-sm right-23 top-1 dark:text-black">
            {badgeLabel}
          </span>
          <button
            onClick={() => adicionarProduto(produto)}
            className="absolute top-2 left-2 border border-white/80 rounded-4xl pl-2 pr-2 bg-neutral-100/60 hover:bg-neutral-100 dark:bg-black/60 text-md"
            aria-label={`Adicionar ${produto.nome} ao carrinho`}
          >
            Adicionar
          </button>
          {quantidadeNoCarrinho > 0 && (
            <p className="absolute top-1 left-28 text-sm text-amber-600 dark:text-white">
              Qtd: {quantidadeNoCarrinho}
            </p>
          )}

          <div
            className="absolute right-3 top-[-10px] flex flex-col items-center justify-center bg-lime-500 rounded-full w-20 h-20 rotate-15 animate-shakeAndScaleRotate dark:text-black"
            style={animationStyles ?? {}}
          >
            <span className="text-[12px] ">R$</span>
            <span className="text-2xl font-bold">
              {produto.preco.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="w-full shadow-md mt-11 dark:bg-neutral-900 border border-black/40 rounded-md overflow-x-hidden">
          {produto.image && (
            <Image
              src={produto.image}
              sizes="(max-width: 768px) 100vw, 300px"
              alt={`Imagem de ${produto.nome}`}
              className="rounded-md object-cover p-3 bg-white"
              priority
            />
          )}
          <div className="bg-white dark:bg-neutral-900">
            <ScrollHint inverted={isOpen} onClick={toggleOpen} />
          </div>

          <div
            className={`flex flex-col indent-2 text-black w-auto bg-white dark:bg-neutral-900 shadow-stone-700 overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${
              isOpen ? "max-h-40 opacity-100 p-2" : "max-h-0 opacity-0 p-0"
            }`}
            style={{ willChange: "max-height, opacity, padding, margin" }}
            aria-hidden={!isOpen}
          >
            <ul className="text-sm space-y-1 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-inner">
              {currentDescriptionItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}