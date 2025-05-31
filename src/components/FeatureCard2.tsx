'use client';
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ScrollHint } from "./common/ScrollHint";

type FeatureCardProps = {
  title: string;
  price: string;
  image: StaticImageData;
  descriptionItems: string[];
  ctaText?: string;
  badgeLabel?: string;
};

export function FeatureCard2({
  title,
  price,
  image,
  descriptionItems,
  ctaText = "Ver mais",
  badgeLabel = "A partir de",
}: FeatureCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <article className="flex flex-col items-center justify-center px-4 py-8 min-w-fit h-auto gap-5">
      
      <div className="relative flex flex-col justify-center items-center min-h-fit w-full min-w-[300px] bg-white dark:bg-neutral-900 rounded-md shadow-md shadow-stone-700 overflow-hidden transition-transform duration-300 hover:scale-[1.05]">
      
        {/* Cabeçalho */}
        <header className="w-full text-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 p-3">
          <h2 className="text-2xl font-bebas text-black bg-white/50 tracking-widest text-center">
            {title}
          </h2>
        </header>
        {/* Imagem */}
        <div className="relative w-full aspect-video overflow-hidden  bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 dark:bg-gradient not dark:bg-neutral-900 dark:bg-none">
          <Image
            src={image}
            alt={`Imagem ilustrativa de ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="rounded-sm object-cover p-3"
            priority
          />
        </div>
        {/* Preço e CTA */}
        <div className="relative w-full px-4 py-4 flex items-center justify-between">
          <span className="absolute right-21 top-2 text-xs text-neutral-600 dark:text-neutral-300">{badgeLabel}</span>
          <div className="absolute -top-3 right-4 flex flex-col items-center justify-center bg-lime-500 text-black rounded-full w-16 h-16 shadow-md animate-bounce">
            <span className="text-[10px] font-light">R$</span>
            <span className="text-lg font-bold">{price}</span>
          </div>
          <button
            className="absolute bottom-0 left-3 text-xs border border-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            onClick={toggleOpen}
            aria-expanded={isOpen}
          >
            {ctaText}
          </button>
        </div>
        {/* Scroll Hint */}
        <ScrollHint inverted={isOpen} onClick={toggleOpen} />
        {/* Descrição expandida */}
        <section
          className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-52 opacity-100 p-2" : "max-h-0 opacity-0 p-0"
          }`}
          style={{ willChange: "max-height, opacity, padding" }}
          aria-hidden={!isOpen}
        >
          <ul className="text-sm list-disc list-inside space-y-1 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-inner">
            {descriptionItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
