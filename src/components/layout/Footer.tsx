import { ThemeToggle } from "../common/ThemeToggle";

export function Footer() {
  return (
    <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
      <div>
        <ul>
          <li>Mapa do site:</li>
          <li>Início</li>
          <li>O Cosmos</li>
          <li>Promoções</li>
          <li>Cardápio</li>
          <li>Combos</li>
          <li>Burguers</li>
          <li>Acompanhamentos</li>
          <li>Bebidas</li>
          <li>Sobremesas</li>
          <li>Pedidos</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
          </li>
          <li>
            <a href="/termos-de-servico">Termos de Serviço</a>
          </li>
        </ul>
      </div>

      <ThemeToggle aria-label="Alternar tema" />
      <p>
        Desenvolvido por{" "}
        <a href="https://devlps.vercel.app">DevLps - Douglas Lopes</a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} Cosmos Delibar — Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
