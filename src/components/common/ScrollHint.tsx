'use client';

import { useState } from 'react';

interface ScrollHintProps {
  inverted?: boolean;
  onClick?: () => void;
}

export function ScrollHint({ inverted = false, onClick }: ScrollHintProps) {
  const [hovered, setHovered] = useState(false);

  // Aqui definimos as classes de transição considerando o invertido
  // A ideia é inverter o translateY para animar "subindo" ao invés de "descendo"
  const translateYOpen = inverted ? '-translate-y-2' : 'translate-y-2';
  const translateYOpenMore = inverted ? '-translate-y-4' : 'translate-y-4';

  return (
    <div
      className="relative w-full flex justify-center items-center h-12 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="flex gap-1 items-center relative">
        {/* Left External Dot */}
        <span
          className={`w-[4px] h-[4px] bg-red-800 rounded-full transition-all duration-500 ease-in-out
            ${hovered ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-0'}`}
        />

        {/* Left Dot */}
        <div className="relative">
          <span
            className={`w-2 h-2 bg-red-800 rounded-full block transition-all duration-500 ease-in-out
              ${hovered ? `${translateYOpen} delay-100` : 'animate-pulse'}`}
          />
          {!hovered && (
            <span className="absolute inset-0 w-full h-full rounded-full border border-red-800 animate-bounce" />
          )}
        </div>

        {/* Center Dot */}
        <div className="relative">
          <span
            className={`w-3 h-3 bg-red-800 rounded-full block transition-all duration-500 ease-in-out
              ${hovered ? `${translateYOpenMore} delay-0` : 'animate-pulse'}`}
          />
          {!hovered && (
            <span className="absolute inset-0 w-full h-full rounded-full border border-red-800 animate-bounce" />
          )}
        </div>

        {/* Right Dot */}
        <div className="relative">
          <span
            className={`w-2 h-2 bg-red-800 rounded-full block transition-all duration-500 ease-in-out
              ${hovered ? `${translateYOpen} delay-100` : 'animate-pulse'}`}
          />
          {!hovered && (
            <span className="absolute inset-0 w-full h-full rounded-full border border-red-800 animate-bounce" />
          )}
        </div>

        {/* Right External Dot */}
        <span
          className={`w-[4px] h-[4px] bg-red-800 rounded-full transition-all duration-500 ease-in-out
            ${hovered ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-0'}`}
        />
      </div>
    </div>
  );
}
