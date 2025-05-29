import Image from "next/image";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Meta } from "@/components/common/Meta";
import { Section } from "@/components/common/Section";

import { SliderFull } from "@/components/SliderFull";
import { Button } from "@/components/Button";
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
