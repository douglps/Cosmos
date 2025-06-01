// data/produtos.ts
import { Produto } from "@/types";
import { StaticImageData } from "next/image";

import comboMercurio from "@/assets/images/cards/5.jpg";

export const produtos: Produto[] = [
  // COMBOS **********************************************************
  {
    id: "combo_mercurio",
    nome: "Combo Mercúrio",
    preco: 32.90,
    descricao: "teste 1 2 3",
    categoria: "combos",
    descriptionItems: [
      "1 Hambúrguer artesanal",
      "1 Porção de batata frita",
      "1 Refrigerante 350ml"
    ],
    image: comboMercurio, // importante definir a imagem aqui!
  },
  {
    id: "combo_2",
    nome: "Combo 2",
    preco: 17.9,
    descricao: "",
    categoria: "combos",
  },
  {
    id: "combo_3",
    nome: "Combo 3",
    preco: 17.9,
    descricao: "",
    categoria: "combos",
  },

  // HAMBÚRGUERES ****************************************************
  {
    id: "burger_mercurio",
    nome: "Burger Mercúrio",
    preco: 17.9,
    descricao:
      "Blend de carnes bovina, queijo cheddar, molho Libra e pão tipo brioche.",
    categoria: "hamburgueres",
  },
  {
    id: "burger_venus",
    nome: "Burger Vênus",
    preco: 25.9,
    descricao:
      "Carne de entrecot, queijo muçarela, tomate, alface americana, molho Gêmeos e pão black.",
    categoria: "hamburgueres",
  },
  {
    id: "burger_terra",
    nome: "Burger Terra",
    preco: 30.9,
    descricao:
      "Carne de frango, queijo muçarela, tomate, rúcula, cebola caramelizada, queijo gorgonzola, molho Libra, pão de cereais",
    categoria: "hamburgueres",
  },
  {
    id: "burger_marte",
    nome: "Burger Marte",
    preco: 30.9,
    descricao:
      "Carne de frango, molho Sagitário, cogumelos picantes, bacon, queijo muçarela, cebola roxa, rúcula e pão australiano.",
    categoria: "hamburgueres",
  },
  {
    id: "burger_saturno",
    nome: "Burger Saturno",
    preco: 27.9,
    descricao:
      "Carne de costela, queijo cheddar, tomate, cebola roxa, bacon, picles, molho Gêmeos e pão australiano.",
    categoria: "hamburgueres",
  },
  {
    id: "burger_urano",
    nome: "Burger Urano",
    preco: 24.9,
    descricao:
      "Carne de costela, queijo muçarela, bacon, tomate, alface americana, picles, cebola, molho Virgem e pão tipo brioche.",
    categoria: "hamburgueres",
  },
  {
    id: "burger_netuno",
    nome: "Burger Netuno",
    preco: 25.9,
    descricao:
      "Carne de costela com chimichurri, queijo muçarela com páprica, cebola roxa, tomate, cenoura em folha, alface americana, molho Touro e pão tipo brioche.",
    categoria: "hamburgueres",
  },

  // VEGETARIANOS *******************************************************
  {
    id: "veg_lua",
    nome: "Burger Veg Lua (Terra)",
    preco: 27.9,
    descricao:
      "Burger de grão de bico, queijo muçarela, cogumelos com gorgonzola, repolho roxo, cenoura em folha, molho Sagitário e pão black. (contém ovos, mel e derivados de leite)",
    categoria: "hamburgueres",
  },
  {
    id: "veg_oberon",
    nome: "Burger Veg Oberon (Urano)",
    preco: 26.9,
    descricao:
      "Burger de grão de bico, pimentão defumado, cogumelos com shoyu, tomate, cenoura em folha, broto, molho Touro e pão brioche. (contém ovos e derivados de leite)",
    categoria: "hamburgueres",
  },
  {
    id: "veg_io",
    nome: "Burger Veg Io (Júpiter)",
    preco: 24.9,
    descricao:
      "Burger de grão de bico, queijo cheddar, tomate, alface americana, maionese e pão tipo brioche. (contém ovos e derivados de leite)",
    categoria: "hamburgueres",
  },
  {
    id: "veg_calisto",
    nome: "Burger Veg Calisto (Júpiter)",
    preco: 19.9,
    descricao:
      "Burger de grão de bico, tomate, alface americana, maionese vegana e pão tipo brioche. (contém ovos)",
    categoria: "hamburgueres",
  },
  {
    id: "veg_tetis",
    nome: "Burger Veg Tétis (Saturno)",
    preco: 19.9,
    descricao:
      "Burger de grão de bico, rúcula, tomate, cebola roxa, picles, molho especial vegano e pão black. (contém ovos)",
    categoria: "hamburgueres",
  },

  // ACOMPANHAMENTOS ************************************************
  {
    id: "omuamua_md",
    nome: "Batatas Omuamua Média",
    preco: 12.9,
    descricao:
      "Batatas crinkle, perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada. Porção média aprox. 110g.",
    categoria: "acompanhamentos",
  },
  {
    id: "omuamua_gr",
    nome: "Batatas Omuamua Grande",
    preco: 14.9,
    descricao:
      "Batatas crinkle, perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada. Porção grande aprox. 170g.",
    categoria: "acompanhamentos",
  },
  // BEBIDAS *********************************************************
  {
    id: "coca",
    nome: "Coca Cola",
    preco: 7.0,
    descricao: "Coca cola lata 350ml.",
    categoria: "bebidas",
  },
  {
    id: "coca_zero",
    nome: "Coca Cola Zero",
    preco: 7.0,
    descricao: "Coca cola zero lata 350ml.",
    categoria: "bebidas",
  },
  {
    id: "fanta_lar",
    nome: "Fanta Laranja",
    preco: 7.0,
    descricao: "Fanta laranja lata 350ml.",
    categoria: "bebidas",
  },
  {
    id: "sprite",
    nome: "Sprite",
    preco: 7.0,
    descricao: "Sprite lata 350ml.",
    categoria: "bebidas",
  },
  {
    id: "kuat",
    nome: "Kuat",
    preco: 7.0,
    descricao: "Kuat lata 350ml.",
    categoria: "bebidas",
  },
  {
    id: "heineken",
    nome: "Cerveja Heineken",
    preco: 11.0,
    descricao: "Cerveja Heineken lata 473ml.",
    categoria: "bebidas",
  },
  {
    id: "bela_vista",
    nome: "Cerveja Bela Vista",
    preco: 10.0,
    descricao: "Cerveja Bela Vista lata 473ml.",
    categoria: "bebidas",
  },
  {
    id: "agua_sg",
    nome: "Água sem gás",
    preco: 5.0,
    descricao: "Água sem gás garrafa 500ml.",
    categoria: "bebidas",
  },
  // SOBREMESAS ******************************************************
  {
    id: "cookie",
    nome: "Cookie Meteorito",
    preco: 5.0,
    descricao:
      "Cookie Meteorito nas versões tradicional ou chocolate, com fragmentos de chocolate e dolçura vindos do outro lado do universo.",
    categoria: "sobremesas",
  },
];
