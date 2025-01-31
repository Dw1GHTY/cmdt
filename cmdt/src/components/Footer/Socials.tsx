import Link from "next/link";
import React from "react";

type TSocialLink = {
  linkPath: string;
  icon: React.ReactNode;
};

interface SocialsProps {
  socialLinks: Array<TSocialLink>;
}

const Socials: React.FC<SocialsProps> = (props) => {
  const { socialLinks } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-sm font-semibold font-sans text-white">Socials</h3>
      <div className="flex flex-row">
        {socialLinks.map((socialLink, index) => {
          return (
            <Link
              key={index}
              href={socialLink.linkPath}
              className="text-white hover:bg-blue-300 rounded-full size-fit p-2"
            >
              {socialLink.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
