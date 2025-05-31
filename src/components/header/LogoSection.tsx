import Image from "next/image";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Link from "next/link";

export function LogoSection() {
  const acimaDe600 = useBreakpoint(600);
  const acimaDe560 = useBreakpoint(560);

  return (
    <div
      className="rounded-md p-2 flexgap-2 min-w-[60px]"
      id="logo-container"
    ><Link href="/" className="flex flex-row items-center gap-2">
      <Image
        src="/logo1.png"
        alt="Logo do Cosmos"
        width={80}
        height={80}
        priority
        fetchPriority="high"
        className=""
      />
      <div className="flex flex-col whitespace-nowrap w-full h-auto">
        <h1 className="hidden min-[450px]:flex font-nasa text-black text-3xl  dark:text-white">
          {acimaDe600 ? "Cosmos Delibar" : "Cosmos"}
        </h1>
        <h2 className="text-center hidden min-[450px]:flex font-caveat text-black text-xl dark:text-white justify-center">
          {acimaDe560 ? "Hamburgueria artesanal" : "Burger"}
        </h2>
      </div></Link>
    </div>
  );
}
