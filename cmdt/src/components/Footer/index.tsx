import React from "react";
import Logo from "../Logo";
import Legal from "./Legal";
import FooterLinkGroup from "./FooterLinkGroup";

const Footer = () => {
  return (
    <div
      className="flex flex-col size-full justify-between p-1 
     bg-gradient-to-r from-blue-700 via-blue-400 to-slate-400"
    >
      <section className="flex flex-col md:flex-row">
        <Logo />
        <div className="flex flex-row">
          <FooterLinkGroup
            links={[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
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
      </section>
      <section>
        <Legal />
      </section>
    </div>
  );
};

export default Footer;
