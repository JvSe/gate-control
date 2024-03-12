"use client";
import Link from "next/link";
import { ElementType } from "react";

type NavLinkProps = {
  route?: string;
  children: string;
  icon?: ElementType;
};

export function NavLink({ children, route = "", icon: Icon }: NavLinkProps) {
  return (
    <Link key={`${children}-${route}`} href={route}>
      <div className="flex gap-3 w-full py-4  border-b border-grey-200">
        {Icon && <Icon />}
        <p className="text-lg font-semibold">{children}</p>
      </div>
    </Link>
  );
}
