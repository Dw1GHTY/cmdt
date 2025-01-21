import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="">
      <Image
        className="rounded-md"
        src={`/logo.jpg`}
        alt="logo"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Logo;
