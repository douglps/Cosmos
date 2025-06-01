// src/types/index.ts (ou onde sua interface ItemCarrinho estiver definida)

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao?: string;
  image?: string;
  categoria: 'hamburgueres' | 'acompanhamentos' | 'bebidas' | 'combos' | 'sobremesas';
  descriptionItems?: string[];
  // Adicione outras propriedades relevantes do seu produto aqui
}

export interface ItemPersonalizado {
  hamburguer: string;
  acompanhamento: string;
  bebida: string;
  sobremesa?: string; // Adicionado
  quantidadeSobremesa?: number; // Adicionado
  precoFinal: number; // <-- ADICIONADO: Preço final do item personalizado
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
  uid?: string; // Identificador único para itens personalizados no carrinho
  personalizado?: ItemPersonalizado; // Detalhes da personalização
  // O precoFinal será acessado via item.personalizado.precoFinal para combos
  // Ou item.produto.preco para produtos não personalizados
}