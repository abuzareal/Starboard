import Card from "./components/UI/Cards/Card";
import Notes from "./components/UI/Notes/Notes";
import { app, p, h1 } from "./styles/App.css";
import "./styles/vars.css";
import { darkTheme, lightTheme } from "./styles/vars.css";

function App() {
  return (
    <div>
      <div className={`${darkTheme} ${app}`}>
        <h1 className={h1}>👾 Starboard 👾</h1>
        <Card>
          <h3>Dark Theme</h3>
          <p className={p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptate voluptatem quos
            voluptatibus quas doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quod voluptate voluptatem quos voluptatibus quas
            doloribus quidem voluptas.
          </p>
        </Card>
        <Notes />
      </div>
    </div>
  );
}

export default App;
