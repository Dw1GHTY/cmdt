import React from "react";

type bullet = {
  text: string;
  submenu?: Array<bullet>;
};

interface BulletArticleProps {
  menus: Array<bullet>;
}

const BulletArticle: React.FC<BulletArticleProps> = (props) => {
  const { menus } = props;
  return (
    <div>
      {menus.map((menu, index) => {
        return (
          <ul key={index}>
            {menu.submenu ? (
              <ul key={index}>
                {menu.submenu.map((item, index) => {
                  return <li key={index}>{item.text}</li>;
                })}
              </ul>
            ) : (
              <li key={index}>{menu.text}</li>
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default BulletArticle;
