import React from "react";

type Bullet = {
  text: string;
  submenu?: string[];
};

interface BulletArticleProps {
  menus: Bullet[] | string[];
  title?: string;
}

const BulletArticle: React.FC<BulletArticleProps> = ({ menus, title }) => {
  return (
    <div className="flex flex-col w-full font-sans text-xl">
      {title && <h2 className="font-semibold text-xl">{title}</h2>}
      <ul className="my-3 px-8 list-disc">
        {menus.map((menu, index) => {
          if (typeof menu === "string") {
            return <li key={index}>{menu}</li>;
          }

          return (
            <li key={index}>
              {menu.text}
              {menu.submenu && (
                <ul className="ml-6 list-disc">
                  {menu.submenu.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BulletArticle;
