import type { Metadata } from "next";
import {
  Caveat_Brush,
  Sedgwick_Ave_Display,
  Oswald,
  Lexend,
  Bebas_Neue,
} from "next/font/google";
import { nasaFont } from "./fonts";
import "./globals.css";

import { Providers } from "@/components/layout/Providers";
import { DrawerCarrinhoWrapper } from "@/components/layout/DrawerCarrinhoWrapper";
import { CarrinhoProvider } from "@/contexts/CarrinhoContext";

import { Header } from "@/components/layout/Header";
import { Atividade } from "@/components/common/Atividade";
import { Footer } from "@/components/layout/Footer";

const sedgwick = Sedgwick_Ave_Display({
  variable: "--font-sedgwick",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caveat = Caveat_Brush({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosmos Delibar - Hamburgueria Artesanal",
  description:
    "Cosmos Delibar: sua hamburgueria artesanal em Porto Alegre com sabores de outro mundo! Experimente carnes suculentas, pães frescos e molhos cósmicos. Onde os sabores do universo encontram o melhor hambúrguer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (
                  theme === 'dark' ||
                  (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${caveat.variable} ${sedgwick.variable} ${oswald.variable} ${lexend.variable} ${bebas.variable} ${nasaFont.variable} font-lexend antialiased bg-lime-100 text-gray-900 dark:bg-zinc-800 dark:text-gray-100`}
      >
        <Providers>
          <CarrinhoProvider>
            <Header />
            <Atividade />
            {children}
            <Footer />
            <DrawerCarrinhoWrapper />
          </CarrinhoProvider>
        </Providers>
      </body>
    </html>
  );
}
