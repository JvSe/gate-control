import { MainLogo } from "../main-logo";
import { NavLink } from "./navlink";

export function SideBar() {
  return (
    <nav className="flex max-w-[20rem] py-8 px-8 w-full h-[98%] self-center flex-col border-r border-gray-800">
      <div className="flex gap-4 items-center">
        <MainLogo />
        <p className="font-montserrat font-extrabold text-xl">GATE CONTROL</p>
      </div>
      <div className="flex flex-col mt-20 mb-auto">
        <NavLink>Dashboard</NavLink>
        <NavLink>Entradas</NavLink>
        <NavLink>Saídas</NavLink>
      </div>

      <div className="flex gap-2 items-center">
        <div className="bg-red-100 w-10 h-10 rounded-full"></div>
        <p>João Vitor Soares</p>
      </div>
    </nav>
  );
}
