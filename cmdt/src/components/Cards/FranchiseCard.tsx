"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TFranchise } from "@/types/TFranchise";
import Link from "next/link";
// TODO: add router for onClick redirection

interface FranchiseCardProps {
  franchise: TFranchise;
}

const FranchiseCard: React.FC<FranchiseCardProps> = (props) => {
  const { franchise } = props;
  return (
    <Card
      className="w-full 
    border-none
    max-w-sm overflow-hidden bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
    hover:ring-2 ring-blue-300 hover:shadow-lg shadow-blue-900 cursor-pointer"
    >
      {/* Image with overlay */}
      <div className="relative w-full">
        <Image
          className="w-full h-48 object-cover brightness-75"
          alt="Franchise location"
          src="/city1.jpg"
          width={400}
          height={200}
          layout="responsive"
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold italic">
          {franchise.LOCATION}
        </h3>
      </div>

      {/* Description & Footer */}
      <CardContent className="p-4 text-white text-xl outline font-semibold">
        <p>{franchise.DESCRIPTION}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Link
          href={franchise.LINK}
          className="text-white transition delay-75 bg-blue-600 p-2 rounded-md hover:bg-blue-300"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FranchiseCard;
