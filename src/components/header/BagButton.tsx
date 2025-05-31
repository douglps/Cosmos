import Image from "next/image";
import { useTheme } from "next-themes";
import { useCarrinho } from "@/hooks/useCarrinho";

export function BagButton() {
  const { theme } = useTheme();
  const { quantidadeTotal, carrinhoAberto, abrirCarrinho, fecharCarrinho } = useCarrinho();

  const bagIcon = theme === "dark" ? "/utils/bag.svg" : "/utils/bag-pr.svg";

  const toggleCarrinho = () => {
    if (carrinhoAberto) {
      fecharCarrinho();
    } else {
      abrirCarrinho();
    }
  };

  return (
    <div
      onClick={toggleCarrinho}
      className="focus:outline-none p-2 flex justify-center flex-col items-center cursor-pointer min-w-[34px] relative"
      aria-label="Abrir/Fechar Carrinho"
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && toggleCarrinho()}
    >
      <Image src={bagIcon} alt="Abrir Carrinho" width={30} height={30} />
      <p className="hidden min-[450px]:flex select-none">Carrinho</p>

      {quantidadeTotal > 0 && (
        <span className="absolute top-0 right-0 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {quantidadeTotal}
        </span>
      )}
    </div>
  );
}
