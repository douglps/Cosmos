interface MenuCardapioProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;  // ⬅️ Adicione esta linha
}

export function MenuCardapio({ children, className = "", title, onClick }: MenuCardapioProps) {
  return (
    <li
      className={`cursor-pointer ${className}`}
      title={title}
      onClick={onClick} // ⬅️ Passe o onClick aqui
    >
      {children}
    </li>
  );
}
