import React from "react";
import {dark,light, btnStyle} from "./ToggleThemeButton.css"

function ToggleThemeButton(props: any) {
    return (
        <button className={btnStyle} onClick={props.toggleTheme}>
            <div className={
                props.theme ? dark  : light
            }>
            </div>
            
        </button>
    );
 
}

export default ToggleThemeButton;
