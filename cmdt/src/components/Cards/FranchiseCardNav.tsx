"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { TFranchise } from "@/types/TFranchise";

interface FranchiseCardProps {
  franchise: TFranchise;
}

const FranchiseCardNav: React.FC<FranchiseCardProps> = (props) => {
  const { franchise } = props;
  const router = useRouter();
  return (
    <div
      className="flex size-fit m-1 p-2"
      onClick={() => {
        router.push(`${franchise.LINK}`);
      }}
    >
      <Card className="w-44 transition delay-75 bg-white hover:bg-blue-200 cursor-pointer">
        <CardHeader>
          <CardTitle>{franchise.LOCATION}</CardTitle>
          <CardDescription>{franchise.DESCRIPTION}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default FranchiseCardNav;
