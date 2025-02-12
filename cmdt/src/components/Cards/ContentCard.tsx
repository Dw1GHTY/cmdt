import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ContentCardProps {
  cardTitle: string;
  children?: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = (props) => {
  const { cardTitle, children } = props;
  return (
    <Card className="flex flex-col items-center h-fit w-2/3 m-2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
      {cardTitle ? (
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
        </CardHeader>
      ) : (
        <></>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ContentCard;
