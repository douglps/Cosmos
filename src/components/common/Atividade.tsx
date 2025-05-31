"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/common/Section";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const diasSemanaLongo = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const diasSemanaCurto = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const diasSemanaAbreviado = [
  "Dom",
  "Seg",
  "Ter",
  "Qua",
  "Qui",
  "Sex",
  "Sáb",
];

function isLojaAberta(date: Date): boolean {
  const dia = date.getDay();
  const hora = date.getHours();
  if ((dia === 3 || dia === 4) && hora >= 11 && hora < 23) return true;
  if ((dia === 5 || dia === 6 || dia === 0) && hora >= 11 && hora < 24) return true;
  return false;
}

function formatarDataPorTamanho(tamanho: "grande" | "media" | "pequena", data: Date) {
  const diaSemanaIndex = data.getDay();
  const diaSemana =
    tamanho === "grande"
      ? diasSemanaLongo[diaSemanaIndex]
      : tamanho === "media"
      ? diasSemanaCurto[diaSemanaIndex]
      : diasSemanaAbreviado[diaSemanaIndex];

  const dataFormatada =
    tamanho === "pequena"
      ? data.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        })
      : data.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

  return { diaSemana, dataFormatada };
}

export function Atividade() {
  const [agora, setAgora] = useState(new Date());
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [tamanhoTela, setTamanhoTela] = useState<"grande" | "media" | "pequena">("grande");

  useEffect(() => {
    const atualizarAgora = () => setAgora(new Date());
    const atualizarTamanho = () => {
      const largura = window.innerWidth;
      if (largura < 640) setTamanhoTela("pequena");
      else if (largura < 1024) setTamanhoTela("media");
      else setTamanhoTela("grande");
    };

    atualizarTamanho(); // inicial
    const timer = setInterval(atualizarAgora, 1000);
    window.addEventListener("resize", atualizarTamanho);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", atualizarTamanho);
    };
  }, []);

  useEffect(() => {
    setMostrarAviso(true);
    const timeout = setTimeout(() => setMostrarAviso(false), 15000);
    return () => clearTimeout(timeout);
  }, []);

  const { diaSemana, dataFormatada } = formatarDataPorTamanho(tamanhoTela, agora);
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
        <div className="min-w-[40px]"><ThemeToggle /></div>
        <div className="mr-3 p-2 text-right flex-grow">
          <strong className={lojaAberta ? "text-green-900 dark:text-green-600" : "text-pink-300"}>
            {lojaAberta ? "🟢" : "🔴"} Loja {lojaAberta ? "Aberta" : "Fechada"}
          </strong>{" "}
          — {horaFormatada}, {diaSemana} — {dataFormatada}
        </div>
      </div>
    </Section>
  );
}
