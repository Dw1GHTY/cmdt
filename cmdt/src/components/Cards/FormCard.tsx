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
    <div className="mt-2 mb-6">
      <Card className="flex flex-col size-fit bg-blue-600">
        <CardHeader>
          <CardTitle className="text-center text-6xl text-white font-sans">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          {children}
        </CardContent>
        <CardFooter className="flex justify-center items-center text-center text-white font-sans text-3xl">
          {footer}
        </CardFooter>
      </Card>
    </div>
  );
};

export default FormCard;
