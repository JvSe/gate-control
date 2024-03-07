import { SideBar } from "@/components/shared/sidebar";

export default function Home() {
  return (
    <div className="h-screen w-full flex">
      <SideBar />
      <main className="flex w-full h-full bg-red-100"></main>
    </div>
  );
}
