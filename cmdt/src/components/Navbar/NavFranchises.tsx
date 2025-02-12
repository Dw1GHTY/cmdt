"use client";
import React from "react";
import FranchiseCardNav from "../Cards/FranchiseCardNav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { TFranchise } from "@/types/TFranchise";

interface NavFranchisesProps {
  franchises: Array<TFranchise>;
}

const NavFranchises: React.FC<NavFranchisesProps> = (props) => {
  const { franchises } = props;
  return (
    <NavigationMenu className="mx-1">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Franchises</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-row size-fit ">
            {franchises.map((franchise: TFranchise, index: number) => {
              return <FranchiseCardNav franchise={franchise} key={index} />;
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavFranchises;
