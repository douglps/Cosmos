import Image from "next/image";

import tabuaCombosImg from "@/assets/images/cards/tabua-combos.jpg";

export function FeatureCard() {
  return (
    <div className="flex bg-yellow-200 dark:bg-lime-950 px-4 py-8 w-full h-auto ">
      <div className="flex flex-col h-auto rounded-sm  shadow-md shadow-stone-800">
        <div
          id="1"
          className="rounded-sm  shadow-md shadow-stone-700 bg-red-200 dark:bg-red-900"
        >
          <Image
            src={tabuaCombosImg}
            width={200}
            height={200}
            alt="Hamburguer com fritas sobre o prato"
            layout="responsive"
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-col indent-2 bg-[#ffd7d8] h-auto w-auto">
          <h2
            className="p-1 m-2 text-xl font-caveat rounded-3xl text-black tracking-widest
border border-lime-950 min-w-fit"
          >
            Combo Interestelar
          </h2>
          <div className="text-sm items-center font-semibold ">
            <p>
              <span className="font-sedgwick text-2xl text-red-800"> + </span>
              Hamburguer de outro mundo
            </p>
            <p>
              <span className="font-sedgwick text-2xl text-red-800"> + </span>
              Batatas Omuamua +
            </p>
            <p>
              <span className="font-sedgwick text-2xl text-red-800"> + </span>
              sua bebida favorita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
