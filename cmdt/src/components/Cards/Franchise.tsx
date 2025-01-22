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

interface FranchiseProps {
  companyInfo: TCompany;
}

const Franchise: React.FC<FranchiseProps> = ({ companyInfo }) => {
  const router = useRouter();
  return (
    <div
      className="flex size-fit m-1"
      onClick={() => {
        router.push(`${companyInfo.link}`);
      }}
    >
      <Card className="w-fit transition delay-75 bg-slate-200 hover:bg-slate-400 cursor-pointer">
        <CardHeader>
          <CardTitle>{companyInfo.name}</CardTitle>
          <CardDescription>{companyInfo.address}</CardDescription>
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

export default Franchise;
