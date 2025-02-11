"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="
    flex mx-1 py-2 justify-center md:justify-normal items-center md:mt-0 h-full rounded-md"
    >
      <Image
        className="cursor-pointer rounded-md hover:ring-2 ring-blue-300"
        onClick={() => {
          router.push("/");
        }}
        alt="Complete Mobile Health logo"
        src={`/logo.jpg`}
        width={150}
        height={40}
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
      />
    </div>
  );
};

export default Logo;
