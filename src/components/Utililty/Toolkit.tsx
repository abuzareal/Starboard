import { toolButton, toolDiv, toolKit } from "./Toolkit.css";
import ToggleThemeButton from "../UI/ToggleThemeButton";
import Utility from "./Utility";
import { CgMenuGridR } from "react-icons/cg";

function Toolkit(props: any) {
  return (
    <div className={toolKit}>
      <CgMenuGridR className={toolButton} onClick={props.handleToolbar} />

      {props.toolkit && (
        <Utility>
          <ToggleThemeButton
            toggleTheme={props.toggleTheme}
            theme={props.theme}
          />
          <hr />
        </Utility>
      )}
    </div>
  );
}

export default Toolkit;
