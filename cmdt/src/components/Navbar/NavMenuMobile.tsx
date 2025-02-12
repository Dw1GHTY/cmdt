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
  isLoading?: boolean; // Add isLoading as a prop
}

const NavMenuMobile: React.FC<NavMenuMobileProps> = (props) => {
  const { links, isLoading } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className="flex text-white size-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col space-y-1">
        <DropdownMenuLabel className="flex justify-center items-center font-semibold">
          Menu
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-blue-400 h-0.5" />
        {links.map((link, index) => {
          if (link.submenu?.isDynamic && isLoading) {
            // If submenu is dynamic and loading, render a placeholder
            return (
              <DropdownMenuItem
                key={index}
                className="flex justify-center items-center text-gray-400"
              >
                <span className="text-center">Loading...</span>
              </DropdownMenuItem>
            );
          }

          return link.submenu ? (
            <DropdownMenuItem asChild key={index} className="flex">
              <NavDropdown name={link.name} links={link.submenu.links || []} />
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              asChild
              key={index}
              className="flex justify-center items-center cursor-pointer hover:bg-slate-400"
            >
              <Link href={link.path || "#"} className="flex size-full">
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
