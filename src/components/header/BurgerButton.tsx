import Image from "next/image";
import { useTheme } from "next-themes";

interface BurgerButtonProps {
  onClick: () => void;
  buttonRef: React.RefObject<HTMLDivElement | null>;
}

export function BurgerButton({ onClick, buttonRef }: BurgerButtonProps) {
  const { theme } = useTheme();
  const burgerIcon = theme === "dark" ? "/utils/burger-br.svg" : "/utils/burger-pr.svg";

  return (
    <div
      onClick={onClick}
      ref={buttonRef}
      className="lg:hidden focus:outline-none p-2 flex justify-center flex-col items-center cursor-pointer h-auto w-auto min-w-[34px]"
      aria-label="Abrir menu"
    >
      <Image src={burgerIcon} alt="Menu" width={30} height={30} priority fetchPriority="high" />
      <p className="hidden min-[500px]:flex">Menu</p>
    </div>
  );
}
