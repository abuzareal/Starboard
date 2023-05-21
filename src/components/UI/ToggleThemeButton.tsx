import React from "react";
import { dark, light, btnStyle } from "./ToggleThemeButton.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiSun } from "react-icons/ci";

function ToggleThemeButton(props: any) {
  return (
    <div
      style={{
        //  reduce the horizontal gap between elements

        display: "grid",
        gridTemplateColumns: "1fr 1fr ",
        alignItems: "center",
       
        width: "100%",
       
      }}
    >
      <p>Theme : </p>
      <button className={btnStyle} onClick={props.toggleTheme}>
        <div className={props.theme ? dark : light}>
          {props.theme ? <CiSun /> : <BsFillMoonStarsFill />}
        </div>
      </button>
    </div>
  );
}

export default ToggleThemeButton;
