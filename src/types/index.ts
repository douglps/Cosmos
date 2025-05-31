export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  categoria: "combos" | "hamburgueres" | "acompanhamentos" | "bebidas" | "sobremesas";
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
  observacoes?: string;
}
