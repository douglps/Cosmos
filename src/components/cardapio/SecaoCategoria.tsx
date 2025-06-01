import { Produto } from "@/types";
import { CardProduto } from "./CardProduto";
import { CombosCard } from "./CombosCard";

interface SecaoCategoriaProps {
  titulo: string;
  produtos: Produto[];
}

export function SecaoCategoria({ titulo, produtos }: SecaoCategoriaProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-black dark:text-white text-center mb-4 mt-4 border-t border-zinc-700">
        {titulo}
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {produtos.map((produto) =>
          produto.categoria === "combos" ? (
            <CombosCard key={produto.id} produto={produto} />
          ) : (
            <CardProduto key={produto.id} produto={produto} />
          )
        )}
      </div>
    </section>
  );
}
