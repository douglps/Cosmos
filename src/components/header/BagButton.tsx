import Image from "next/image";
import { useTheme } from "next-themes";

// interface BagButtonProps {
//   onClick: () => void;
//   buttonRef: React.RefObject<HTMLDivElement | null>;
// }
// { onClick, buttonRef }: BagButtonProps
export function BagButton() {
  const { theme } = useTheme();
  const bagIcon =
    theme === "dark" ? "/utils/bag.svg" : "/utils/bag-pr.svg";

  return (
    <div
      //   onClick={onClick}
      //   ref={buttonRef}
      className="focus:outline-none p-2 flex justify-center flex-col items-center cursor-pointer min-w-[34px]"
      aria-label="Realizar bag"
    >
      <Image src={bagIcon} alt="Abrir Carrinho" width={30} height={30} />
      <p className="hidden min-[450px]:flex">Carrinho</p>
    </div>
  );
}
