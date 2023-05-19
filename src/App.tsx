import Card from "./components/UI/Cards/Card";
import Notes from "./components/Notes/Notes";
import { app, p, h1, container } from "./styles/App.css";
import "./styles/vars.css";
import { darkTheme, lightTheme } from "./styles/vars.css";

import Input from "./components/Input/Form";
import Utility from "./components/Utililty/Utility";
=======
import { useState } from "react";
import ToggleThemeButton from "./components/UI/ToggleThemeButton";

// lightTheme

function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (

    <div className={`${lightTheme} ${app}`}>
      <Notes />
      <div className={container}>
        {/* <h1 className={h1}>👾 Starboard 👾</h1> */}
        <Input />
        <Utility />

    <div className={`${theme ? darkTheme : lightTheme} ${app}`}>
      <Notes />
      <div className={container}>
        <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
        <h1 className={h1}>👾 Starboard 👾</h1>
        {/* <Card>
          <h3>Dark Theme</h3>
          <p className={p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptate voluptatem quos
            voluptatibus quas doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quod voluptate voluptatem quos voluptatibus quas
            doloribus quidem voluptas.
          </p>
        </Card> */}
      </div>
    </div>
  );
}

export default App;
