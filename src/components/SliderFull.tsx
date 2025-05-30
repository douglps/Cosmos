"use client";

import { useRef } from "react";
import { Section } from "@/components/common/Section";
import Link from "next/link";
import Image from "next/image";

import Slide from "@/assets/images/slide/astronauta.png";
import Slide1 from "@/assets/images/slide/1.jpg";
import Slide2 from "@/assets/images/slide/2.jpg";
import Slide3 from "@/assets/images/slide/3.jpg";
import Slide4 from "@/assets/images/slide/4.jpg";
import leftSwiper from "@/assets/images/slide/left-swiper.svg";
import rightSwiper from "@/assets/images/slide/right-swiper.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export function SliderFull() {
  const swiperRef = useRef<SwiperType | null>(null);

  const slideLinks = [
    {
      image: Slide,
      href: "/oferta/1",
      title: "Promoção Espacial",
      description: "Viaje nas ofertas exclusivas do universo!",
      cta: "Explorar Galáxia",
    },
    {
      image: Slide1,
      href: "/oferta/1",
      title: "Oferta 1",
      description: "Economize em grandes produtos.",
      cta: "Ver Oferta",
    },
    {
      image: Slide2,
      href: "/oferta/2",
      title: "Novidades Cósmicas",
      description: "Produtos recém-lançados do outro mundo.",
      cta: "Ver Novidades",
    },
    {
      image: Slide3,
      href: "/oferta/3",
      title: "Preço Interplanetário",
      description: "Descontos fora da órbita!",
      cta: "Aproveitar",
    },
    {
      image: Slide4,
      href: "/oferta/4",
      title: "Explosão de Ofertas",
      description: "Preços que colapsam até buracos negros.",
      cta: "Ir agora",
    },
  ];

  return (
    <Section>
      <div>
        <p className="p-4 bg-lime-100 dark:bg-stone-900 text-2xl text-shadow-sm text-shadow-lime-800 dark:text-shadow-lime-700 text-center transition-all duration-300 ease-in-out">
          Confira as{" "}
          <span className="text-red-600 dark:text-yellow-300 text-3xl">
            ofertas
          </span>{" "}
          mais{" "}
          <span className="text-red-600 dark:text-yellow-300 text-3xl">
            incríveis
          </span>{" "}
          de todo o{" "}
          <span className="text-red-600 dark:text-yellow-300 text-3xl">
            Cosmos
          </span>
          ! 🌌
        </p>

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-stone-900">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[EffectCreative, Autoplay, Pagination, Navigation]}
            effect="creative"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (_, className) => {
                return `<span class="${className} text-white w-3 h-6 bg-stone-900 opacity-50 inline-block mx-1 transition-all duration-300"></span>`;
              },
            }}
            parallax={true}
            loop
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
                rotate: [0, 0, -45],
                opacity: 0.6,
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
                rotate: [0, 0, 45],
                opacity: 0.6,
              },
            }}
            className="w-full h-full"
          >
            {slideLinks.map(
              ({ image, href, title, description, cta }, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={href}
                    className="relative block w-full h-full group"
                  >
                    <Image
                      src={image}
                      alt={title}
                      width={1920}
                      height={1080}
                      className="object-cover w-full h-full"
                      priority={index === 0}
                    />

                    {/* Overlay de Texto */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end transition-all duration-500 backdrop-blur-[1px]">
                      <div className="bg-black/30 p-2 rounded-md w-fit max-w-full">
                        <h2 className="text-white text-xl  font-bold mb-2">
                          {title}
                        </h2>
                        <p className="text-white text-sm md:text-base mb-4">
                          {description}
                        </p>
                      </div>

                      <span className="inline-block mt-4 bg-white text-black  p-2 rounded-full text-sm font-semibold w-fit hover:bg-gray-200 transition">
                        {cta}
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* Botão Anterior */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full shadow-lg z-10 transition"
            aria-label="Slide anterior"
          >
            <Image
              src={leftSwiper}
              alt="Slide anterior"
              width={60}
              height={60}
              className="w-10 h-10"
            />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full shadow-lg z-10 transition"
            aria-label="Próximo slide"
          >
            <Image
              src={rightSwiper}
              alt="Próximo slide"
              width={60}
              height={60}
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </Section>
  );
}
