import { TLink } from "@/types/TLink";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterLinkGroupProps {
  links: Array<TLink>;
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = (props) => {
  const { links } = props;
  return (
    <div className="flex flex-row mx-2 justify-center items-center">
      <ul className="flex flex-col size-fit">
        {links.map((link, index) => {
          return (
            <li
              className="flex flex-row my-0.5 text-white underline hover:text-blue-900"
              key={index}
            >
              <ArrowRightIcon className="w-4" />
              <Link href={link.path || "#"}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      {/* <Separator
        orientation="vertical"
        className="bg-white w-1 ml-2 rounded-md"
      /> */}
    </div>
  );
};

export default FooterLinkGroup;
