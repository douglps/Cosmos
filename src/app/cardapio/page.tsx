"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import Image from "next/image";
import { MenuCardapio } from "@/components/layout/MenuCardapio";

import burgerIcon from "@/assets/images/utils/burgerIcon100.png";
import friesIcon from "@/assets/images/utils/friesIcon100.png";
import comboIcon from "@/assets/images/utils/comboIcon100.png";
import drinkIcon from "@/assets/images/utils/cokeIcon100.png";
import cookieIcon from "@/assets/images/utils/cookieIcon100.png";
import menuIcon from "@/assets/images/utils/menuIcon100.png";

import { SecaoCategoria } from "@/components/cardapio/SecaoCategoria";
import { produtos } from "@/data/produtos";

const icon_size = 50;

const categorias = [
  { key: "menu", label: "Todos", icon: menuIcon },
  { key: "combos", label: "Combos", icon: comboIcon },
  { key: "hamburgueres", label: "Hambúrgueres", icon: burgerIcon },
  { key: "acompanhamentos", label: "Acompanhamentos", icon: friesIcon },
  { key: "bebidas", label: "Bebidas", icon: drinkIcon },
  { key: "sobremesas", label: "Sobremesas", icon: cookieIcon },
];

export default function Cardapio() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>("menu");
  const [busca, setBusca] = useState("");

  // Filtra produtos pela categoria e também pelo texto da busca (case insensitive)
  const produtosFiltrados = produtos.filter(
    (p) =>
      (categoriaSelecionada === "menu" ||
        p.categoria === categoriaSelecionada) &&
      p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // const {
  //   carrinhoAberto,
  //   fecharCarrinho,
  //   itens,
  //   removerProduto,
  //   limparCarrinho,
  // } = useCarrinho();

  // const itensCarrinhoDrawer = itens.map((item) => ({
  //   id: item.produto.id,
  //   nome: item.produto.nome,
  //   preco: item.produto.preco,
  //   quantidade: item.quantidade,
  // }));

  return (
    <>
      <Section id="cardapio">
        <p className="flex justify-center font-oswald text-2xl p-3 tracking-widest">
          Cardápio
        </p>
        <div className="flex justify-end my-4 mr-4">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="border rounded-3xl px-3 py-1 w-full max-w-[180px] bg-slate-100 focus:outline-stone-400"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            aria-label="Buscar produto"
          />
        </div>
        <ul className="flex flex-row justify-around gap-1 ">
          {categorias.map((cat) => (
            <MenuCardapio
              key={cat.key}
              onClick={() => setCategoriaSelecionada(cat.key)}
              className={`cursor-pointer p-2 rounded-full border border-black/40 transition ${
                categoriaSelecionada === cat.key
                  ? "bg-lime-600/60"
                  : "hover:bg-amber-400"
              }`}
              title={cat.label}
            >
              <Image
                src={cat.icon}
                alt={cat.label}
                width={icon_size}
                height={icon_size}
                title={cat.label}
                priority={false}
              />
            </MenuCardapio>
          ))}
        </ul>

        {/* Exibe a seção da categoria selecionada */}
        <SecaoCategoria
          titulo={
            categorias.find((cat) => cat.key === categoriaSelecionada)?.label ||
            ""
          }
          produtos={produtosFiltrados}
        />
      </Section>
    </>
  );
}
