import { useState } from "react";
import Card from "../../UI/Cards/Card";
import { animation, divStyle, noteStyle, p } from "./Note.css";
import Draggable from "react-draggable";
import moment from "moment";

const Note = (props: any) => {
  

  const [isDragged, setIsDragged] = useState(false);
  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      onStart={() => {
        setIsDragged(true);
      }}
      onStop={() => {
        setIsDragged(false);
      }}
    >
      <div className={divStyle}>
        <Card className={` ${isDragged ? animation : noteStyle}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          doloremque quia nobis amet veritatis assumenda harum aliquam dolor
          voluptates eligendi!
        </Card>
        <p className={p}>{timeStamp}</p>
      </div>
    </Draggable>
  );
};

export default Note;
