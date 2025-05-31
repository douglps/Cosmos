import { ThemeToggle } from "../common/ThemeToggle";

export function Footer() {
  return (
    <footer className="w-full px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 flex flex-col items-center gap-6">
      
      {/* Mapa do site em linha */}
      <nav className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-medium">
        <span className="text-gray-700 dark:text-gray-300">Mapa do site:</span>
        {[
          "Início",
          "O Cosmos",
          "Promoções",
          "Cardápio",
          "Combos",
          "Burguers",
          "Acompanhamentos",
          "Bebidas",
          "Sobremesas",
          "Pedidos",
          "Serviços",
          "Contato",
        ].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:underline hover:text-red-500 dark:hover:text-lime-400"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Links institucionais */}
      <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
        <a href="/politica-de-privacidade" className="hover:underline">
          Política de Privacidade
        </a>
        <a href="/termos-de-servico" className="hover:underline">
          Termos de Serviço
        </a>
      </div>

      {/* Toggle de tema */}
      <ThemeToggle aria-label="Alternar tema" />

      {/* Créditos e direitos */}
      <div className="text-xs text-center">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://devlps.vercel.app"
            className="underline hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            DevLps - Douglas Lopes
          </a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Cosmos Delibar — Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
