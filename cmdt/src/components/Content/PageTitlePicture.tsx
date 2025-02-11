import Image from "next/image";
import React from "react";

interface PageTitlePictureProps {
  imagePath: string;
  imageAlt: string;
  title?: string;
  description?: string;
}

const PageTitlePicture: React.FC<PageTitlePictureProps> = (props) => {
  const { imagePath, imageAlt, title, description } = props;
  return (
    <div
      className="
    relative w-full h-96 mt-20 mb-10 font-sans 
    shadow-xl shadow-blue-300 border-b-2 border-blue-500"
    >
      {/* Background Image */}
      <Image
        src={imagePath}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 italic">
        {title && <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>}
        {description && <p className="text-lg mt-2">{description}</p>}
      </div>
    </div>
  );
};

export default PageTitlePicture;
