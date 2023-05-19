import React from "react";
import { cardStyle } from "./Card.css";

const Card = (props: any) => {
  return (
    <div className={`${cardStyle.default} + ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
