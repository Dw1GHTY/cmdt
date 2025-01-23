import React from "react";
import Franchise from "../Cards/Franchise";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { TCompany } from "@/types/TCompany";

//TODO: Fetch companies from backend | POSSIBLY fetch data in navbar and pass neccessary data to
//TODO: NavFranchises and NavMenuMobile
const fetchedCompanies: Array<TCompany> = [
  {
    name: "Company 1",
    address: "Omega Lane, MI, FL",
    link: "https://google.com",
    description: "Sample company description",
  },
  {
    name: "Company 2",
    address: "G.Washington 99, CA, SF",
    link: "https://youtube.com",
    description: "Sample company description",
  },
  {
    name: "Company 3",
    address: "Vojvode Stepe, RS, NI",
    link: "https://x.com",
    description: "Sample company description",
  },
];

// interface NavFranchisesProps {
//     companies: Array<TCompany>;
// }

const NavFranchises: React.FC = () => {
  return (
    <NavigationMenu className="mx-1">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Franchises</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-row size-fit ">
            {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
            {fetchedCompanies.map((company, index) => {
              return <Franchise companyInfo={company} key={index} />;
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavFranchises;
