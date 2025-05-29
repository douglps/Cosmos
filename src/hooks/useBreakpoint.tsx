// hooks/useBreakpoint.ts
import { useEffect, useState } from "react";

export function useBreakpoint(breakpoint: number) {
  const [isAbove, setIsAbove] = useState<boolean>(() => typeof window !== "undefined" && window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isAbove;
}
