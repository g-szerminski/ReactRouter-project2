import React from "react";
import { blockStatement } from "@babel/types";

const Article = props => {
  const styles = {
    marginTop: 40
  };
  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 3,
          textTransform: "uppercase"
        }}>
        {props.title}
      </h3>
      <span
        style={{
          display: "block",
          marginBottom: 10
        }}>
        {props.author}
      </span>
      <p>{props.text}</p>
    </article>
  );
};

export default Article;
