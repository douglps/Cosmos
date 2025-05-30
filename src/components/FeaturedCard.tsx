'use client'
import { useState } from "react";
import Image from "next/image";

import { ScrollHint } from "./common/ScrollHint";
import tabuaCombosImg from "@/assets/images/cards/tabua-combos.jpg";

export function FeatureCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col items-center justify-center bg-red-100 dark:bg-lime-950 px-4 py-8 w-full h-auto gap-5">
      <div
        id="card-home-1"
        className="flex flex-col h-auto w-full rounded-sm bg-yellow-400 shadow-md shadow-stone-800 max-w-[300px]"
      >
        {/* Título */}
        <h2 className="p-1 m-1 text-2xl text-black tracking-widest font-bebas bg-white text-center">
          Combo Interestelar
        </h2>

        {/* Preço e Ver mais */}
        <div className="relative flex flex-row justify-between pl-4 pr-4 ">
          <span className="absolute text-sm right-23">A Partir de</span>
          <span className="absolute top-0 left-2 border border-white rounded-4xl p-2 bg-stone-100/60">
            Ver mais
          </span>
          <div className="absolute right-3 top-[-10px] flex flex-col items-center justify-center bg-lime-500 rounded-full w-20 h-20 rotate-15 animate-shakeAndScaleRotate">
            <span className="text-[12px] ">R$</span>
            <span className="text-2xl font-bold ">37,90</span>
          </div>
        </div>

        {/* Imagem */}
        <div className="rounded-sm w-full shadow-md mt-11 shadow-stone-700 dark:bg-red-900">
          <Image
            src={tabuaCombosImg}
            width={500}
            height={500}
            alt="Hamburguer com fritas sobre o prato"
            className="rounded-sm w-full p-3 "
          />
        </div>

        {/* ScrollHint com sentido invertido conforme aberto */}
        <ScrollHint inverted={isOpen} onClick={toggleOpen} />

        {/* Card que abre e fecha com animação */}
        <div
          className={`flex flex-col indent-2 text-black m-2 w-auto shadow-md bg-red-800 shadow-stone-700 rounded-sm overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 p-0"
          }`}
          style={{ willChange: "max-height, opacity, padding" }}
        >
          <div className="text-sm items-center bg-white font-semibold p-1 m-1 shadow-md rounded-md shadow-stone-700">
            <ul className="list-disc list-inside">
              <li>Hamburguer de outro mundo</li>
              <li>Batatas Omuamua</li>
              <li>Sua bebida favorita.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
