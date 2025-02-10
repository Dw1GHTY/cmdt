import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ContentCardProps {
  cardTitle: string;
  children?: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = (props) => {
  const { cardTitle, children } = props;
  return (
    <Card className="flex flex-col items-center size-fit my-2 mx-1 md:mx-2 text-wrap">
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
