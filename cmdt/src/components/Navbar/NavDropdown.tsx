import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TLink } from "@/types/TLink";
import Link from "next/link";

interface NavDropdownProps {
  name: string;
  links: Array<TLink>;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ name, links }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white transition hover:bg-slate-400 h-full px-1 rounded-md">
        {name}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Our Franchises</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((link, index) => {
          return (
            <DropdownMenuItem key={index} className="size-fit text-black">
              <Link href={link.path || "#"}>{link.name}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
