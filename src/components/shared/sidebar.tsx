import Link from "next/link";

export function SideBar() {
  return (
    <nav className="flex max-w-[25rem] w-full h-full flex-col bg-yellow-100">
      <span>GC</span>
      <Link href="">Dashboard</Link>
    </nav>
  );
}
