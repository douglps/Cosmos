"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/common/Section";

const diasSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function isLojaAberta(date: Date): boolean {
  const dia = date.getDay();
  const hora = date.getHours();

  if ((dia === 3 || dia === 4) && hora >= 11 && hora < 23) return true;
  if ((dia === 5 || dia === 6 || dia === 0) && hora >= 11 && hora < 24) return true;

  return false;
}

export function Atividade() {
  const [agora, setAgora] = useState(new Date());
  const [mostrarAviso, setMostrarAviso] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mostrar aviso automaticamente por 6 segundos em telas pequenas
  useEffect(() => {
      setMostrarAviso(true);
      const timeout = setTimeout(() => setMostrarAviso(false), 15000);
      return () => clearTimeout(timeout);
    
  }, []);

  const diaSemana = diasSemana[agora.getDay()];
  const dataFormatada = agora.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const horaFormatada = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const lojaAberta = isLojaAberta(agora);

  return (
    <Section>
      <div className="relative bg-stone-100 flex flex-row justify-between items-center gap-5 dark:bg-stone-800">
        <div
          className="group bg-red-400 ml-3 rounded-md p-3 text-right relative cursor-pointer"
          onClick={() => setMostrarAviso((prev) => !prev)}
        >
          ⚠️
          <div
            className={`absolute left-14 top-1/2 -translate-y-1/2 w-50 bg-pink-200 text-black dark:bg-yellow-300 rounded-md shadow-md shadow-stone-800 dark:shadow-stone-400 p-3 text-justify text-md z-50 transition-opacity duration-300 ${
              mostrarAviso ? "opacity-100 block" : "opacity-0 hidden"
            } group-hover:block`}
          >
            As atividades da loja foram encerradas — Site Demonstrativo ⚠️
          </div>
        </div>

        <div className="mr-3 p-2 text-right flex-grow">
          <strong
            className={
              lojaAberta
                ? "text-green-900 dark:text-green-600"
                : "text-pink-300"
            }
          >
            {lojaAberta ? "🟢" : "🔴"} Loja {lojaAberta ? "Aberta" : "Fechada"}{" "}
          </strong>
          — {horaFormatada}, {diaSemana} — {dataFormatada}
        </div>
      </div>
    </Section>
  );
}
