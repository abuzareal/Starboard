import Card from "../../UI/Cards/Card";
import { noteStyle } from "./Note.css";
import Draggable from "react-draggable";

const Note = (props: any) => {
  return (
    <Draggable
      
    
    >
      <Card className={noteStyle}>Sample Note</Card>
    </Draggable>
  );
};

export default Note;
