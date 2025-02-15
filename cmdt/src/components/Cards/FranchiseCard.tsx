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
    <Card className="w-full max-w-sm overflow-hidden bg-slate-200 rounded-lg">
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
      <CardContent className="p-4">
        <p>{franchise.DESCRIPTION}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Link
          href={franchise.LINK}
          className="text-white transition delay-75 bg-blue-600 p-2 rounded-md hover:ring-1 ring-blue-900"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FranchiseCard;
