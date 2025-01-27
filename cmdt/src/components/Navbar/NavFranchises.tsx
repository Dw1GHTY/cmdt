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
import { TCompany } from "@/types/TCompany";

interface NavFranchisesProps {
  companies: Array<TCompany>;
}

const NavFranchises: React.FC<NavFranchisesProps> = ({ companies }) => {
  return (
    <NavigationMenu className="mx-1">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Franchises</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-row size-fit ">
            {companies.map((company: TCompany, index: number) => {
              return <FranchiseCardNav companyInfo={company} key={index} />;
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavFranchises;
