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

const LocationCard: React.FC = () => {
  return (
    <Card className="flex flex-col w-fit my-2 mx-1 md:mx-2">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          <Image alt="test" src="/city1.jpg" width={100} height={100} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;
