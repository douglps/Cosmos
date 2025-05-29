import Link from "next/link";

interface NavLinksProps {
  onClick?: () => void;
  vertical?: boolean;
}

export function NavLinks({ onClick, vertical = false }: NavLinksProps) {
  const baseClass = "font-oswald";
  const itemClass = vertical ? "text-lg space-y-3" : "text-xl gap-4 flex flex-row flex-nowrap whitespace-nowrap";

  return (
    <ul className={`${baseClass} ${itemClass} pl-5 pr-5`}>
      {[
        { label: "Início", href: "/" },
        { label: "Cardápio", href: "/cardapio" },
        { label: "O Cosmos", href: "/sobre" },
        { label: "Promoções", href: "/promos" },
        { label: "Localização", href: "/localizacao" },
      ].map(({ label, href }) => (
        <li key={href}>
          <Link href={href} onClick={onClick}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
