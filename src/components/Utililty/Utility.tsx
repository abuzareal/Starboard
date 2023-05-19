import React from "react";
import Card from "./../UI/Cards/Card";
import { cardStyle } from "./../UI/Cards/Card.css";
import { untilStyle } from "./Utility.css";

const Utility = (props: any) => {
  return <Card className={`${cardStyle.default} ${untilStyle}`}>Utility</Card>;
};

export default Utility;
