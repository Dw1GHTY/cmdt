import { TLink } from "@/types/TLink";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  link: TLink;
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  return (
    <Link
      className="flex justify-center items-center text-white text-center 
      h-full p-1 mx-2 transition hover:delay-75 hover:bg-slate-400  rounded-sm"
      href={`${link.path}`}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
