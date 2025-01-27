import React from "react";
import { TLink } from "@/types/TLink";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import NavDropdown from "./NavDropdown";

interface NavMenuMobileProps {
  links: Array<TLink>;
}

const NavMenuMobile: React.FC<NavMenuMobileProps> = ({ links }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Menu className="flex text-white size-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col space-y-1">
        <DropdownMenuLabel className="flex justify-center items-center font-semibold">
          Menu
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-blue-400 h-0.5" />
        {links.map((link, index) => {
          return link.submenu ? (
            <DropdownMenuItem asChild key={index} className="flex">
              <NavDropdown name={`${link.name}`} links={link.submenu} />
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              asChild
              key={index}
              className="flex justify-center items-center cursor-pointer hover:bg-slate-400"
            >
              <Link
                href={`${link.path}`}
                className="flex size-full hover:bg-slate-400"
              >
                {link.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenuMobile;
