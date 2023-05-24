import { useState } from "react";
import Card from "../../UI/Cards/Card";
import { animation, divStyle, noteStyle, p } from "./Note.css";
import Draggable from "react-draggable";

const Note = (props: any) => {
  const [isDragged, setIsDragged] = useState(false);
  return (
    <Draggable
      defaultPosition={{ x: props.xpos, y: props.ypos }}
      onStart={() => {
        setIsDragged(true);
      }}
      onStop={() => {
        setIsDragged(false);
      }}
    >
      <div
        style={{
          border: "1px solid #fff",
          minWidth: "fit-content",
          width: "fit-content",
        }}
      >
        <Card className={` ${isDragged ? animation : noteStyle}`}>
          <p
          >{props.note}</p>

          <p className={p}>{props.timestamp}</p>
        </Card>
      </div>
    </Draggable>
  );
};

export default Note;
