import React from "react";
import { DiReact } from "react-icons/di";
import { cardStyle } from "./UI/Cards/Card.css";
import { footer } from "./Footer.css";

function Footer() {
  return (
    <div className={`${cardStyle.glass} +${footer} `}>
      <p>Made with ⚛️ by Nischal and Abuzar</p>
    </div>
  );
}

export default Footer;
