import { useState, useEffect } from "react";

import Notes from "./components/Notes/Notes";
import Input from "./components/Input/Form";
import items from "./models/mockItem";
import Footer from "./components/Footer";
import Toolkit from "./components/Utililty/Toolkit";
import Loader from "./components/UI/Loader";

import { app, h1, container } from "./styles/App.css";
import "./styles/vars.css.ts_";
import { darkTheme, lightTheme } from "./styles/vars.css";

function App() {
  const [theme, setTheme] = useState(true);
  const [item, setItem] = useState("");
  const [list, setList] = useState(items);
  const [isValid, setIsValid] = useState(true);
  const [toolkit, setToolkit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleToolbar = () => {
    setToolkit(!toolkit);
  };

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

  return loading ? (
    <Loader />
  ) : (
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
        <Toolkit toolkit={toolkit} handleToolbar={handleToolbar} toggleTheme={toggleTheme} theme={theme} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
