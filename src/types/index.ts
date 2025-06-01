// src/types/index.ts
import { StaticImageData } from "next/image";

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  categoria: "combos" | "hamburgueres" | "acompanhamentos" | "bebidas" | "sobremesas";
  descriptionItems?: string[];
  image?: StaticImageData;
}


export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
  observacoes?: string;
}
