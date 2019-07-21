import React from "react";
import Article from "../components/Aticle";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "1111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta nihil ipsam doloremque quod porro itaque nam harum deleniti odio obcaecati magni, nemo in, nulla omnis maxime eveniet sequi velit."
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Dupa Jasiu",
    text:
      "2222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta nihil ipsam doloremque quod porro itaque nam harum deleniti odio obcaecati magni, nemo in, nulla omnis maxime eveniet sequi velit."
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Zenon Zenonkiewicz",
    text:
      "333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta nihil ipsam doloremque quod porro itaque nam harum deleniti odio obcaecati magni, nemo in, nulla omnis maxime eveniet sequi velit."
  }
];

const HomePage = () => {
  const artList = articles.map(item => <Article key={item.id} {...item} />);
  return <div className="home">{artList}</div>;
};

export default HomePage;
