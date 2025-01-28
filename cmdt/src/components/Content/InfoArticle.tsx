import React from "react";
import { Separator } from "../ui/separator";

//! Ako se naidje na NEWLINE u stringu, renderuje se <br />
type TParagraph = {
  title?: string;
  text: string;
};

interface InfoArticleProps {
  title?: string;
  paragraphs: Array<TParagraph>;
}

const InfoArticle: React.FC<InfoArticleProps> = (props) => {
  const { paragraphs } = props;
  return (
    <section className="flex flex-col w-full md:w-2/3 bg-white rounded-md drop-shadow-lg">
      {paragraphs.map((paragraph, index) => {
        return paragraph.title ? (
          <>
            <article
              key={index}
              className="flex flex-col items-center justify-center px-1"
            >
              <h3 className="text-3xl text-center font-semibold">
                {paragraph.title}
              </h3>
              <Separator
                orientation="horizontal"
                className="w-1/2 bg-blue-800 h-2 rounded-lg"
              />
              <p>{paragraph.text}</p>
            </article>
            <br />
          </>
        ) : (
          <>
            <article key={index} className="px-1">
              <p>{paragraph.text}</p>
            </article>
            <br />
          </>
        );
      })}
    </section>
  );
};

export default InfoArticle;
