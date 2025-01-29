import { TLink } from "@/types/TLink";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

interface FooterLinkGroupProps {
  links: Array<TLink>;
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = (props) => {
  const { links } = props;
  return (
    <div className="flex flex-row mx-2">
      <ul className="flex flex-col size-fit">
        {links.map((link, index) => {
          return (
            <li className="my-0.5" key={index}>
              <Link
                className="text-white underline hover:text-cyan-400"
                href={link.path || "#"}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Separator orientation="vertical" className="bg-white w-1 ml-2" />
    </div>
  );
};

export default FooterLinkGroup;
