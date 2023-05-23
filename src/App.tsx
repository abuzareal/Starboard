import Notes from "./components/Notes/Notes";
import { app, h1, container } from "./styles/App.css";
import "./styles/vars.css.ts_";
import { darkTheme, lightTheme } from "./styles/vars.css";

import Input from "./components/Input/Form";
import Utility from "./components/Utililty/Utility";

import { useState } from "react";
import ToggleThemeButton from "./components/UI/ToggleThemeButton";

import items from "./models/mockItem";

import Footer from "./components/Footer";


function App() {
  const [theme, setTheme] = useState(true);
  const [item, setItem] = useState("");
  const [list, setList] = useState(items);
  const [isValid, setIsValid] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  const changeHandler = (e: any) => {
    setItem(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (item.trim() === "") {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      const newItem = {
        id: Math.random(),
        note: item,
        timestamp: new Date().toLocaleString(),
        xpos: Math.floor(Math.random() * 10),
        ypos: Math.floor(Math.random() * 10),
      };
      setList([...list, newItem]);
      setItem("");
    }
  };

  return (
    <div className={`${theme ? darkTheme : lightTheme} ${app}`}>
      <Notes notes={list} />
      <h1 className={h1}>StarBoard 👾</h1>
      <div className={container}>
        <div
          style={{
            position: "fixed",
          }}
        >
          <Input
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            item={item}
          />
        </div>
        <Utility>
          <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
          <hr />
        </Utility>
      </div>
      <Footer />
    </div>
  );
}

export default App;
