import React from "react";
import Card from "./../UI/Cards/Card";
import { cardStyle } from "./../UI/Cards/Card.css";
import { untilStyle } from "./Utility.css";
import Draggable from "react-draggable";

const Utility = (props: any) => {
  return (
    <Draggable>
      <div>
        <Card className={`${cardStyle.glass} ${untilStyle}`}>
          {props.children}
        </Card>
      </div>
    </Draggable>
  );
};

export default Utility;
