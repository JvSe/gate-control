"use client";
import { Moon, Sun } from "@/components/shared/icons/svg";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "next-themes";

interface IButtonToggleThemeDTO extends ButtonProps {}

function ButtonToggleTheme({ ...rest }: IButtonToggleThemeDTO) {
  const { setTheme, theme = "light" } = useTheme();

  const ToogleIcon = {
    light: <Moon size={20} color="#0D2943" />,
    dark: <Sun size={20} color="#FCB937" />,
  };

  return (
    <div className="absolute bottom-2 right-0">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="clean"
              size="clean"
              className="mr-[1rem] p-2 shadow-none bg-[#CBE2EE] hover:brightness-90 dark:bg-transparent hover:bg-accent dark:border dark:border-[#7C7C7C]"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              {...rest}
            >
              {ToogleIcon[theme as keyof typeof ToogleIcon]}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Alterar tema</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export { ButtonToggleTheme };
