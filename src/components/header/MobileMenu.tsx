import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { NavLinks } from "./NavLinks";

import Image from "next/image";
import closeIconLight from "@/assets/images/utils/close-br.svg";
import closeIconDark from "@/assets/images/utils/close-pr.svg";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
}

export function MobileMenu({ isOpen, closeMenu, menuRef }: MobileMenuProps) {
  const { theme } = useTheme();
  const closeIcon = theme === "dark" ? closeIconLight : closeIconDark;

  return (
    <div
      ref={menuRef}
      className={`transition-all duration-300 ease-in-out transform lg:hidden absolute top-20 right-2 z-50 bg-[#ffe9d4] border border-black dark:bg-slate-700 text-black dark:text-white rounded-sm shadow-2xl p-4 w-40 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
      <div className="flex justify-center ml-4 mr-4 items-center mb-4">
        <div onClick={closeMenu} className="focus:outline-none absolute top-0 right-0 bg-[#ffe9d4] dark:bg-lime-950 rounded-md">
          <Image src={closeIcon} alt="Fechar menu" width={28} height={28} />
        </div>
        <ThemeToggle />
      </div>
      <NavLinks onClick={closeMenu} vertical />
    </div>
  );
}
