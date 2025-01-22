import React from "react";
import { TLink } from "@/types/TLink";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface NavMenuMobileProps {
  links: Array<TLink>;
}

const NavMenuMobile: React.FC<NavMenuMobileProps> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Menu className="flex text-white size-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex justify-center items-center font-semibold">
          Menu
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-blue-400 h-0.5" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenuMobile;
