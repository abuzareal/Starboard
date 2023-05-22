import Notes from "./components/Notes/Notes";
import { app, h1, container } from "./styles/App.css";
import "./styles/vars.css.ts_";
import { darkTheme, lightTheme } from "./styles/vars.css";

import Input from "./components/Input/Form";
import Utility from "./components/Utililty/Utility";

import { useState } from "react";
import ToggleThemeButton from "./components/UI/ToggleThemeButton";

function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={`${theme ? darkTheme : lightTheme} ${app}`}>
      <Notes />

      <h1 className={h1}>StarBoard 👾</h1>
      <div className={container}>
        <div
          className="fixed"
          style={{
            position: "fixed",
          }}
        >
          <Input />
        </div>
        <Utility>
          <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
          <hr />
        </Utility>
      </div>
    </div>
  );
}

export default App;
