import React from "react";
import { emoji, loader, spinner, loaderContainer } from "./Loader.css";
import { BsRocketFill } from "react-icons/bs";

const Loader = () => {
  return (
    <div className={loader}>
     <div className={loaderContainer}>
       <div className={spinner}></div>
      <BsRocketFill className={emoji}/>
     </div>
    </div>
  );
};

export default Loader;
