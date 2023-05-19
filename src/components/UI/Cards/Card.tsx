import React from "react";
import { cardStyle } from "./Card.css";

const Card = (props: any) => {
  return (
    <div className={`${cardStyle} + ${props.className}`}>{props.children}</div>
  );
};

export default Card;
