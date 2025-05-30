"use client";

import { useState, useEffect, useRef } from "react";
import { LogoSection } from "@/components/header/LogoSection";
import { NavLinks } from "@/components/header/NavLinks";
import { BurgerButton } from "@/components/header/BurgerButton";
import { LoginButton } from "@/components/header/LoginButton";
import { BagButton } from "../header/BagButton";
import { MobileMenu } from "@/components/header/MobileMenu";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const botaoMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        botaoMenuRef.current &&
        !botaoMenuRef.current.contains(e.target as Node)
      ) {
        setMenuAberto(false);
      }
    };

    const handleScroll = () => setMenuAberto(false);

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <header className="flex items-center justify-between text-black p-2 bg-lime-100 ring shadow-xl ring-gray-900/5 dark:bg-lime-950 dark:text-white relative">
      <LogoSection />
      <nav className="hidden lg:block ml-2 mr-2">
        <NavLinks />
      </nav>
      <MobileMenu
        isOpen={menuAberto}
        closeMenu={() => setMenuAberto(false)}
        menuRef={menuRef}
      />
      <div className="flex justify-right gap-3 p-4 min-w-[100px]">
        <BurgerButton
          onClick={() => setMenuAberto(!menuAberto)}
          buttonRef={botaoMenuRef}
        />
        <BagButton />
        <LoginButton />
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
