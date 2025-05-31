import { Produto } from "@/types";

export const produtos: Produto[] = [
  {
    id: "combo1",
    nome: "Combo Delícia",
    preco: 35.90,
    descricao: "Hambúrguer + batata + bebida",
    categoria: "combos",
  },
  {
    id: "burger1",
    nome: "Hambúrguer Clássico",
    preco: 20.50,
    descricao: "Hambúrguer artesanal com queijo",
    categoria: "hamburgueres",
  },
  // ... demais produtos
];
