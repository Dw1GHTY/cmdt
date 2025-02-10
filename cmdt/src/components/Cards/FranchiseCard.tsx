"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// TODO: add router for onClick redirection
import Image from "next/image";

const FranchiseCard: React.FC = () => {
  return (
    <Card className="flex flex-col justify-center items-center w-72 my-2 mx-1 md:mx-2">
      <CardHeader>
        {/* //?Image can be in the title with overlaying text */}
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          <Image alt="test" src="/city1.jpg" width={100} height={100} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>A short description of the Franchise</p>
      </CardContent>
      <CardFooter className=" underline">
        <p>LINK TOWARDS FRANCHISE</p>
      </CardFooter>
    </Card>
  );
};

export default FranchiseCard;
