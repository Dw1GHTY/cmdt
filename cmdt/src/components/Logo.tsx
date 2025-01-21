"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        router.push("/");
      }}
    >
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
