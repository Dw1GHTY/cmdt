import React from "react";
import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-10 w-[100px] rounded-md mt-2" />
      </div>
    </div>
  );
};

export default CardSkeleton;
