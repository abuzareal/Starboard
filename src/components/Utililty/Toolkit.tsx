import React from "react";
import { toolButton, toolDiv, toolKit } from "./Toolkit.css";
import { cardStyle } from "../UI/Cards/Card.css";

function Toolkit(props: any) {
  return (
    <div className={toolKit}>
      <button className={toolButton} onClick={props.handleToolbar}>
        I
      </button>
      {props.toolkit && (
    <div className={`${cardStyle.glass}  ${toolDiv}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          ad.
        </div>
      )}
    </div>
  );
}

export default Toolkit;
