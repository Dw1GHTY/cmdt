"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TFranchise } from "@/types/TFranchise";
import Link from "next/link";
// TODO: add router for onClick redirection

interface FranchiseCardProps {
  franchise: TFranchise;
}

const FranchiseCard: React.FC<FranchiseCardProps> = (props) => {
  const { franchise } = props;
  return (
    <Card className="flex flex-col justify-center items-center w-72 my-2 mx-1 md:mx-2">
      <CardHeader>
        <CardTitle>{franchise.LOCATION}</CardTitle>
        <CardDescription>
          <Image alt="test" src="/city1.jpg" width={100} height={100} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{franchise.DESCRIPTION}</p>
      </CardContent>
      <CardFooter className="">
        <Link
          href={franchise.LINK}
          className="text-white transition delay-75 bg-blue-600 p-2 rounded-md size-fit hover:ring-1 ring-blue-900"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FranchiseCard;
