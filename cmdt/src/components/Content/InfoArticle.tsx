import React from "react";

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
    <section
      className="
    flex flex-col w-full md:w-2/3 
    rounded-xl drop-shadow-3xl shadow-slate-400
    font-sans
    isolate  bg-white/30 shadow-lg ring-1 ring-black/5"
    >
      {paragraphs.map((paragraph, index) => {
        return paragraph.title ? (
          <>
            <article
              key={index}
              className="flex flex-col items-center justify-center px-1"
            >
              <h3 className="text-3xl my-2 text-center font-semibold">
                {paragraph.title}
              </h3>
              <p className="text-xl">{paragraph.text}</p>
            </article>
            <br />
          </>
        ) : (
          <>
            <article key={index} className="px-1">
              <p className="text-xl">{paragraph.text}</p>
            </article>
            <br />
          </>
        );
      })}
    </section>
  );
};

export default InfoArticle;
