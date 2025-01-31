import React from "react";
import Logo from "../Logo";
import Legal from "./Legal";
import FooterLinkGroup from "./FooterLinkGroup";
import Socials from "./Socials";
import { Facebook, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div
      className="flex flex-col size-full justify-between p-1 
     bg-gradient-to-r from-blue-700 via-blue-400 to-slate-400"
    >
      <section className="flex flex-col md:flex-row mx-5 justify-center md:space-x-8">
        <Logo />

        <div className="flex flex-row justify-center items-center">
          <FooterLinkGroup
            links={[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
              { name: "Capability Statement", path: "/capability_statement" },
            ]}
          />
          <FooterLinkGroup
            links={[
              { name: "Background Screening", path: "/background_screening" },
              { name: "DNA Test", path: "/dna_paternity_testing" },
              { name: "Drug Testing", path: "/drug_testing" },
            ]}
          />
        </div>
        <Socials
          socialLinks={[
            {
              linkPath: "https://www.facebook.com",
              icon: <Facebook />,
            },
            {
              linkPath: "https://www.youtube.com",
              icon: <Youtube />,
            },
          ]}
        />
      </section>
      <section className="mt-4">
        <Legal />
      </section>
    </div>
  );
};

export default Footer;
