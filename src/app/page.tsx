import { AddEntrance } from "@/components/shared/add-entrance";
import { SideBar } from "@/components/shared/sidebar";
import { TableGeneral } from "@/components/tables/table-general";
import { ButtonToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bell } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <SideBar />
      <main className="flex gap-4 flex-col w-full h-full px-10 pt-10">
        <div className="flex items-center">
          <h1 className="font-bold font-montserrat text-2xl">Dashboard</h1>
          <div className="flex gap-4 ml-auto">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="clean" className="p-2 rounded-full">
                    <Bell />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notificações</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <AddEntrance />
          </div>
        </div>
        <Separator />
        <TableGeneral />
      </main>
      <ButtonToggleTheme />
    </div>
  );
}
