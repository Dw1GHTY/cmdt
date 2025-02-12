import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface FormCardProps {
  title?: string;
  description?: string;
  footer?: string;
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = (props) => {
  const { title, description, footer, children } = props;
  return (
    <div>
      <Card className="flex flex-col size-fit bg-white">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          {children}
        </CardContent>
        <CardFooter className="text-center">{footer}</CardFooter>
      </Card>
    </div>
  );
};

export default FormCard;
