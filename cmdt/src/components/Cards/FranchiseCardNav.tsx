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
import { useRouter } from "next/navigation";
import { TCompany } from "@/types/TCompany";

interface FranchiseCardProps {
  companyInfo: TCompany;
}

const FranchiseCardNav: React.FC<FranchiseCardProps> = ({ companyInfo }) => {
  const router = useRouter();
  return (
    <div
      className="flex size-fit m-1"
      onClick={() => {
        router.push(`${companyInfo.LINK}`);
      }}
    >
      <Card className="w-fit transition delay-75 bg-slate-200 hover:bg-slate-400 cursor-pointer">
        <CardHeader>
          <CardTitle>{companyInfo.LOCATION}</CardTitle>
          <CardDescription>{companyInfo.DESCRIPTION}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FranchiseCardNav;
