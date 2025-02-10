import React from "react";
import { Skeleton } from "../ui/skeleton";

const NavbarSekeleton = () => {
  return (
    <Skeleton
      className="fixed h-24 top-0 z-10 flex flex-row justify-between items-center md:justify-normal  w-screen 
                rounded-none          
                border-b-2 border-b-blue-800 
                shadow-sm shadow-blue-900 
                bg-gradient-to-r from-blue-700 to-slate-400
                backdrop-filter backdrop-blur-lg bg-opacity-5"
    />
  );
};

export default NavbarSekeleton;
