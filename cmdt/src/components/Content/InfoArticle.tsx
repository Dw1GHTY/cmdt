import React from "react";

type TParagraph = {
  paragraphTitle?: string;
  text?: string;
  component?: React.ReactNode;
};

interface InfoArticleProps {
  title?: string;
  paragraphs: Array<TParagraph>;
}

const InfoArticle: React.FC<InfoArticleProps> = (props) => {
  const { paragraphs, title } = props;
  return (
    <section className="flex flex-col w-full md:w-2/3 font-sans">
      {title ? <h2 className="text-4xl text-center mb-2">{title}</h2> : <br />}
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <article className="flex flex-col justify-center px-1">
            {paragraph.paragraphTitle && (
              <h3 className="text-2xl my-2  font-semibold">
                {paragraph.paragraphTitle}
              </h3>
            )}
            {paragraph.component ? (
              paragraph.component
            ) : (
              <p className="text-xl">{paragraph.text}</p>
            )}
          </article>
          <br />
        </React.Fragment>
      ))}
    </section>
  );
};

export default InfoArticle;
