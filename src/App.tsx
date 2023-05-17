import { app } from "./styles.css";
import "./theme.css";
import { darkTheme, lightTheme } from "./theme.css";

function App() {
  return (
    <div>
      <div className={darkTheme}>
        <div className={app}>
          <h1>Dark Theme</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptate voluptatem quos
            voluptatibus quas doloribus quidem voluptas. Quisquam voluptatum,
            quibusdam, quia, quod voluptate voluptatem quos voluptatibus quas
            doloribus quidem voluptas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
