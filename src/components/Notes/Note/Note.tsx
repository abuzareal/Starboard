import { useState } from "react";
import Card from "../../UI/Cards/Card";
import { animation, noteStyle } from "./Note.css";
import Draggable from "react-draggable";

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
      <div
        style={{
          cursor: "grab",
        }}
      >
        <Card className={` ${isDragged ? animation : noteStyle}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          odio perferendis harum dolor eligendi quaerat temporibus impedit error
          cum magnam.
        </Card>
      </div>
    </Draggable>
  );
};

export default Note;
