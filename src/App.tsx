import Card from "./components/UI/Cards/Card";
import Notes from "./components/Notes/Notes";
import { app, p, h1, container } from "./styles/App.css";
import "./styles/vars.css";
import { darkTheme, lightTheme } from "./styles/vars.css";
import Input from "./components/Input/Form";
import Utility from "./components/Utililty/Utility";
// lightTheme

function App() {
  return (
    <div className={`${darkTheme} ${app}`}>
      <Notes />
      <div className={container}>
        {/* <h1 className={h1}>👾 Starboard 👾</h1> */}
        <Input />
        <Utility />
      </div>
    </div>
  );
}

export default App;
