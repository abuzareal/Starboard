import React from "react";
import { dark, light, btnStyle } from "./ToggleThemeButton.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TbSunFilled } from "react-icons/tb";

function ToggleThemeButton(props: any) {
  return (
    <button className={btnStyle} onClick={props.toggleTheme}>
      <div className={props.theme ? dark : light}>
        {props.theme ? <TbSunFilled /> : <BsFillMoonStarsFill />}
      </div>
    </button>
  );
}

export default ToggleThemeButton;
