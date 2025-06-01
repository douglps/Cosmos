'use client';

import { useState } from 'react';

interface ScrollHintProps {
  inverted?: boolean;
  onClick?: () => void;
}

export function ScrollHint({ inverted = false, onClick }: ScrollHintProps) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    // Dispara clique externo
    onClick?.();

    // Ativa efeito de hover temporário para dispositivos mobile
    setHovered(true);
    setTimeout(() => setHovered(false), 1000); // tempo pode ser ajustado conforme o necessário
  };

  return (
    <div
      className={`relative w-full flex justify-center items-center h-12 mt-2 pb-1 cursor-pointer ${
        inverted ? 'scale-y-[-1]' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div className="flex gap-1 items-center relative">
        <span
          className={`w-3 h-3 bg-red-800 rounded-full transition-all duration-500 ease-in-out
            ${hovered ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-0'}`}
        />
        <div className="relative">
          <span
            className={`w-2 h-2 bg-red-800 rounded-full block transition-all duration-500 ease-in-out
              ${hovered ? 'translate-y-3 delay-100' : 'animate-pulse'}`}
          />
          {!hovered && (
            <span className="absolute inset-0 w-full h-full rounded-full border border-red-800 animate-bounce" />
          )}
        </div>
        <div className="relative">
          <span
            className={`w-3 h-3 bg-red-800 rounded-full block transition-all duration-500 ease-in-out
              ${hovered ? 'translate-y-5 delay-0 w-[4px] h-[4px]' : 'animate-pulse'}`}
          />
          {!hovered && (
            <span className="absolute inset-0 w-full h-full rounded-full border border-red-800 animate-bounce" />
          )}
        </div>
        <div className="relative">
          <span
            className={`w-2 h-2 bg-red-800 rounded-full block transition-all duration-500 ease-in-out
              ${hovered ? 'translate-y-3 delay-100' : 'animate-pulse'}`}
          />
          {!hovered && (
            <span className="absolute inset-0 w-full h-full rounded-full border border-red-800 animate-bounce" />
          )}
        </div>
        <span
          className={`w-3 h-3 bg-red-800 rounded-full transition-all duration-500 ease-in-out
            ${hovered ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-0'}`}
        />
      </div>
    </div>
  );
}
