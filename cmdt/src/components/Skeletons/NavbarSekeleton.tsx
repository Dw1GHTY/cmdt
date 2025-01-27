import React from "react";
import { Skeleton } from "../ui/skeleton";

const NavbarSekeleton = () => {
  return (
    <Skeleton
      className="fixed h-20 top-0 z-10 flex flex-row justify-between items-center md:justify-normal  w-screen 
    border-b-1 bg-slate-500"
    />
  );
};

export default NavbarSekeleton;
