// data/produtos.ts
import { Produto } from "@/types";

import comboMercurio from "@/assets/images/cards/6.jpg"
import comboCalisto from "@/assets/images/cards/combos/calistoCombo-removebg.png";
import comboLua from "@/assets/images/cards/combos/luaCombo-removebg.png";
import comboIo from "@/assets/images/cards/combos/ioCombo-removebg.png";
import comboOberon from "@/assets/images/cards/combos/oberonCombo-removebg.png";
import comboTetis from "@/assets/images/cards/combos/tetisCombo-removebg.png";
import comboVenus from "@/assets/images/cards/combos/venusCombo-removebg.png";
import comboNetuno from "@/assets/images/cards/combos/netunoCombo-removebg.png";
// import mercurio from "@/assets/images/cards/burgers/mercurio-removebg.png";
// import venus from "@/assets/images/cards/burgers/venus-removebg.png";
// import terra from "@/assets/images/cards/burgers/terra-removebg.png";
// import marte from "@/assets/images/cards/burgers/marte-removebg.png";
// import saturno from "@/assets/images/cards/burgers/saturno-removebg.png";
// import urano from "@/assets/images/cards/burgers/urano-removebg.png";
// import netuno from "@/assets/images/cards/burgers/netuno-removebg.png";
// import plutao from "@/assets/images/cards/burgers/plutao-removebg.png";
// import lua from "@/assets/images/cards/burgers/lua-removebg.png";
// import oberon from "@/assets/images/cards/burgers/oberon-removebg.png";
// import io from "@/assets/images/cards/burgers/io-removebg.png";
// import calisto from "@/assets/images/cards/burgers/calisto-removebg.png";
// import tetis from "@/assets/images/cards/burgers/tetis-removebg.png";


export const produtos: Produto[] = [
  // COMBOS **********************************************************
  {
    id: "combo_mercurio",
    nome: "Combo Mercúrio",
    preco: 32.90,
    descricao: "O Mensageiro dos Deuses",
    categoria: "combos",
    descriptionItems: [
      "Burger Mercúrio - Blend de carnes bovina, queijo cheddar, molho Libra e pão tipo brioche.",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboMercurio, // importante definir a imagem aqui!
  },
  {
    id: "combo_venus",
    nome: "Combo Vênus",
    preco: 17.9,
    descricao: "O Encanto Celestial",
    categoria: "combos",
    descriptionItems: [
      "Burger Vênus - Carne de entrecot, queijo muçarela, tomate, alface americana, molho Gêmeos e pão black.",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboVenus,
  },
  {
    id: "combo_terra",
    nome: "Combo Terra",
    preco: 17.9,
    descricao: "Abundância de Sensações",
    categoria: "combos",
     descriptionItems: [
      "Burger Terra - Carne de frango, queijo muçarela, tomate, rúcula, cebola caramelizada, queijo gorgonzola, molho Libra, pão de cereais",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboMercurio,
  },
  {
    id: "combo_marte",
    nome: "Combo Marte",
    preco: 17.9,
    descricao: "O Guerreiro Saboroso",
    categoria: "combos",
     descriptionItems: [
      "Burger Marte - Carne de frango, molho Sagitário, cogumelos picantes, bacon, queijo muçarela, cebola roxa, rúcula e pão australiano.",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboMercurio,
  },
  {
    id: "combo_saturno",
    nome: "Combo Saturno",
    preco: 17.9,
    descricao: "O Titã Inesquecível",
    categoria: "combos",
     descriptionItems: [
      "Burger Saturno - Carne de costela, queijo cheddar, tomate, cebola roxa, bacon, picles, molho Gêmeos e pão australiano.",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboMercurio,
  },
  {
    id: "combo_urano",
    nome: "Combo Urano",
    preco: 17.9,
    descricao: "Combinação Primordial",
    categoria: "combos",
     descriptionItems: [
      "Burger Urano - Carne de costela, queijo muçarela, bacon, tomate, alface americana, picles, cebola, molho Virgem e pão tipo brioche.",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboMercurio,
  },
  {
    id: "combo_netuno",
    nome: "Combo Netuno",
    preco: 17.9,
    descricao: "Estiloso e Soberano",
    categoria: "combos",
     descriptionItems: [
      "Burger Netuno - Carne de costela com chimichurri, queijo muçarela com páprica, cebola roxa, tomate, cenoura em folha, alface americana, molho Touro e pão tipo brioche.",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboNetuno,
  },
// COMBOS VEGANOS
{
    id: "combo_lua",
    nome: "Combo Veg Lua",
    preco: 17.9,
    descricao: "Delícia Dioturna",
    categoria: "combos",
     descriptionItems: [
      "Burger Lua - Burger de grão de bico, queijo muçarela, cogumelos com gorgonzola, repolho roxo, cenoura em folha, molho Sagitário e pão black. (contém ovos, mel e derivados de leite)",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboLua,
  },
  {
    id: "combo_oberon",
    nome: "Combo Veg Oberon",
    preco: 17.9,
    descricao: "Encantador de Paladar",
    categoria: "combos",
     descriptionItems: [
      "Burger Oberon - Burger de grão de bico, pimentão defumado, cogumelos com shoyu, tomate, cenoura em folha, broto, molho Touro e pão brioche. (contém ovos e derivados de leite)",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboOberon,
  },
  {
    id: "combo_io",
    nome: "Combo Veg Io",
    preco: 17.9,
    descricao: "Amante do Sabor",
    categoria: "combos",
     descriptionItems: [
      "Burger Io - Burger de grão de bico, queijo cheddar, tomate, alface americana, maionese e pão tipo brioche. (contém ovos e derivados de leite)",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboIo,
  },
  {
    id: "combo_calisto",
    nome: "Combo Veg Calisto",
    preco: 17.9,
    descricao: "Essência Selvagem",
    categoria: "combos",
     descriptionItems: [
      "Burger Calisto - Burger de grão de bico, tomate, alface americana, maionese vegana e pão tipo brioche. (contém ovos)",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboCalisto,
  },
  {
    id: "combo_tetis",
    nome: "Combo Veg Tétis",
    preco: 17.9,
    descricao: "Complexidade Profunda",
    categoria: "combos",
     descriptionItems: [
      "Burger Tétis - Burger de grão de bico, rúcula, tomate, cebola roxa, picles, molho especial vegano e pão black. (contém ovos)",
      "Batatas Omuamua - Perfeitamente crocantes e douradas, temperadas com sal do himalaia e um toque de páprica defumada.",
    ],
    image: comboTetis,
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
  {
    id: "burger_plutao",
    nome: "Burger Plutão",
    preco: 25.9,
    descricao:
      "Carne de costela, cebola caramelizada, queijo cheddar e pão australiano.",
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
  {
    id: "agua_cg",
    nome: "Água com gás",
    preco: 5.0,
    descricao: "Água com gás garrafa 500ml.",
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
