import { Meta } from "@/components/common/Meta";

import { SliderFull } from "@/components/SliderFull";
import { FeatureCard } from "@/components/FeatureCard";

import tabuaCombosImg from "@/assets/images/cards/tabua-combos.jpg";
import servidoImg from "@/assets/images/cards/2.jpg";
import omuamuaImg from "@/assets/images/cards/3.jpg";
import trioImg from "@/assets/images/cards/4.jpg";
import pegaImg from "@/assets/images/cards/5.jpg";
import marteImg from "@/assets/images/cards/6.jpg";

export default function Home() {
  return (
    <>
      <Meta
        title="Página Inicial — Cosmos"
        description="Bem-vindo ao Cosmos, explore o universo."
        image="/home-og.png"
        url="https://cosmos.exemplo.com/home"
      />
      <SliderFull />
      <div className="flex flex-row flex-wrap justify-center items-start gap-4">
        <FeatureCard
          title="Combo Interestelar"
          ctaText="Ver mais"
          badgeLabel="A partir de"
          price="37,90"
          image={tabuaCombosImg}
          descriptionItems={[
            "Hamburguer de outro mundo",
            "Batatas Omuamua",
            "Sua bebida favorita.",
          ]}
        />
        <FeatureCard
          title="Combinação perfeita"
          ctaText="Ver mais"
          badgeLabel="A partir de"
          price="37,90"
          image={servidoImg}
          descriptionItems={[
            "Hamburguer de outro mundo",
            "Batatas Omuamua",
            "Sua bebida favorita.",
          ]}
        />
        <FeatureCard
          title="Alinhamento cósmico"
          ctaText="Ver mais"
          badgeLabel="A partir de"
          price="21.90"
          image={trioImg}
          descriptionItems={[
            "Escolha o seu astro",
            "Batatas Omuamua",
            "Sua bebida favorita.",
          ]}
        />
        <FeatureCard
          title="Burger Marte"
          ctaText="Ver mais"
          badgeLabel="A partir de"
          price="21.90"
          image={marteImg}
          descriptionItems={[
            "Escolha o seu astro",
            "Batatas Omuamua",
            "Sua bebida favorita.",
          ]}
        />
        <FeatureCard
          title="todo mundo quer"
          ctaText="Ver mais"
          badgeLabel="A partir de"
          price="21.90"
          image={pegaImg}
          descriptionItems={[
            "Escolha o seu astro",
            "Batatas Omuamua",
            "Sua bebida favorita.",
          ]}
        />
        <FeatureCard
          title="Astro Burger"
          ctaText="Ver mais"
          badgeLabel="A partir de"
          price="21.90"
          image={omuamuaImg}
          descriptionItems={[
            "Escolha o seu astro",
            "Batatas Omuamua",
            "Sua bebida favorita.",
          ]}
        />
      </div>
    </>
  );
}
