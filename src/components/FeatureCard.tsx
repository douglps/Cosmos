'use client'
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

export function FeatureCard({
  title,
  price,
  image,
  descriptionItems,
  ctaText,
  badgeLabel,
}: FeatureCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col items-center justify-around px-4 py-8 min-w-fit h-auto gap-5 ">
      <div className="flex flex-col h-auto w-full rounded-md bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-700 shadow-md shadow-stone-700 min-w-[270px] max-w-[300px] transition-transform duration-300 hover:scale-[1.05]">
        
        <h2 className="p-1 m-1 text-2xl text-black tracking-widest font-bebas bg-white/50 text-center">
          {title}
        </h2>

        <div className="relative flex flex-row justify-between pl-4 pr-4">
          <span className="absolute text-sm right-23 top-1 dark:text-black">{badgeLabel}</span>
          <button className="absolute top-2 left-2 border border-white/80 rounded-4xl pl-2 pr-2 bg-neutral-100/60 hover:bg-neutral-100 dark:bg-black/60 text-md">
            {ctaText}
          </button>
          <div className="absolute right-3 top-[-10px] flex flex-col items-center justify-center bg-lime-500 rounded-full w-20 h-20 rotate-15 animate-shakeAndScaleRotate dark:text-black ">
            <span className="text-[12px] ">R$</span>
            <span className="text-2xl font-bold">{price}</span>
          </div>
        </div>

        <div className="rounded-sm w-full shadow-md mt-11 dark:bg-neutral-900 overflow-x-hidden">
          <Image
            src={image}
            width={500}
            height={500}
            alt={`Imagem de ${title}`}
            className="rounded-sm object-cover p-3"
          />
        <div className="bg-white dark:bg-neutral-900">
          <ScrollHint inverted={isOpen} onClick={toggleOpen}/>
        </div>

        <div
          className={`flex flex-col indent-2 text-black w-auto bg-white dark:bg-neutral-900 shadow-stone-700  overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100 p-2" : "max-h-0 opacity-0 p-0"
          }`}
          style={{ willChange: "max-height, opacity, padding, margin" }}
        >
          {/* <div className="text-sm items-center bg-white font-semibold p-1 m-1 shadow-md rounded-md shadow-stone-700"> */}
            <ul className="text-sm  space-y-1 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-inner">
              {descriptionItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          {/* </div> */}
        </div>
        </div>

      </div>
    </div>
  );
}
