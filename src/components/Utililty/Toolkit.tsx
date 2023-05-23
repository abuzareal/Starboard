import React from "react";
import { toolButton, toolDiv, toolKit } from "./Toolkit.css";

function Toolkit(props: any) {
  return (
    <div className={toolKit}>
      <button className={toolButton} onClick={props.setToolkit}>
        I
      </button>
      {props.toolkit && (
        <div className={toolDiv}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          ad.
        </div>
      )}
    </div>
  );
}

export default Toolkit;
