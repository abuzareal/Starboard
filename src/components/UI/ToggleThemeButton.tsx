import React from "react";
import { dark, light, btnStyle } from "./ToggleThemeButton.css";

function ToggleThemeButton(props: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "10px",
      }}
    >
      <p>Theme</p>
      <button className={btnStyle} onClick={props.toggleTheme}>
        <div className={props.theme ? dark : light}></div>
      </button>
    </div>
  );
}

export default ToggleThemeButton;
