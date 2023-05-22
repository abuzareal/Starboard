import Card from "../../UI/Cards/Card";
import { noteStyle } from "./Note.css";
import Draggable from "react-draggable";

const Note = (props: any) => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <div
        style={{
          cursor: "grab",
        }}
      >
        <Card className={noteStyle}>Sample Note</Card>
      </div>
    </Draggable>
  );
};

export default Note;
