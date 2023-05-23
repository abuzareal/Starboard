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
      <div className={divStyle}>
        <Card className={` ${isDragged ? animation : noteStyle}`}>
          {props.note}
        </Card>
        <p className={p}>{props.timestamp}</p>
      </div>
    </Draggable>
  );
};

export default Note;
