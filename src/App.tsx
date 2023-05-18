import Card from "./components/UI/Card";
import { app, p } from "./styles.css";
import "./theme.css";
import { darkTheme, lightTheme } from "./theme.css";

function App() {
  return (
    <div>
      <div className={`${darkTheme} ${app}`}>
        <Card  >
          <h1>Dark Theme</h1>
          <p className={p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptate voluptatem quos
            voluptatibus quas doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quod voluptate voluptatem quos voluptatibus quas
            doloribus quidem voluptas.
          </p>
         
        </Card>
      </div>
    </div>
  );
}

export default App;
