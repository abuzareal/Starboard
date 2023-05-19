import Card from "../../UI/Cards/Card";
import { noteStyle } from "./Note.css";
import Draggable from "react-draggable";

const Notes = (props: any) => {
  return (
    <Draggable>
      <Card className={noteStyle}>
        {props.children}
      </Card>
    </Draggable>
  );
};

export default Notes;
