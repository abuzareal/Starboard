import React from "react";
import "./Card.css";
import { card } from "./Card.css";

const Card = (props: any) => {
  return <div className={card}>{props.children}</div>;
};

export default Card;
