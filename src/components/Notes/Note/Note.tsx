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
        <Card className={` ${isDragged ? (animation) : noteStyle}`}>
          {props.note}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          adipisci sequi ab facere ipsum amet porro quae et optio hic?
          <hr />
          <p className={p}>{props.timestamp}</p>
        </Card>
      </div>
    </Draggable>
  );
};

export default Note;
