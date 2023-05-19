import Card from "./components/UI/Cards/Card";
import Notes from "./components/Notes/Notes";
import { app, p, h1, container } from "./styles/App.css";
import "./styles/vars.css";
import { darkTheme, lightTheme } from "./styles/vars.css";
// lightTheme

function App() {
  return (
    <div className={`${darkTheme} ${app}`}>
      <Notes />
      <div className={container}>
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
