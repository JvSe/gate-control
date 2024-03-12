"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function MainLogo() {
  const { theme } = useTheme();
  return (
    <Image
      className="w-10 drop-shadow-lg"
      src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"}
      alt="Logo Gate Control"
      width={200}
      height={200}
    />
  );
}
