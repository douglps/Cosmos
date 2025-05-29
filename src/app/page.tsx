
import { Meta } from "@/components/common/Meta";

import { SliderFull } from "@/components/SliderFull";
import { FeatureCard } from "@/components/FeaturedCard";

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
      <FeatureCard />
    </>
  );
}
