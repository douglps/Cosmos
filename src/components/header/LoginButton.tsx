import Image from "next/image";
import { useTheme } from "next-themes";

// interface LoginButtonProps {
//   onClick: () => void;
//   buttonRef: React.RefObject<HTMLDivElement | null>;
// }
// { onClick, buttonRef }: LoginButtonProps
export function LoginButton() {
  const { theme } = useTheme();
  const loginIcon =
    theme === "dark" ? "/utils/login-br.svg" : "/utils/login-pr.svg";

  return (
    <div
      //   onClick={onClick}
      //   ref={buttonRef}
      className="focus:outline-none p-2 flex justify-center flex-col items-center cursor-pointer min-w-[34px]"
      aria-label="Realizar Login"
    >
      <Image src={loginIcon} alt="Fazer Login" width={30} height={30} />
      <p className="hidden min-[450px]:flex">Login</p>
    </div>
  );
}
