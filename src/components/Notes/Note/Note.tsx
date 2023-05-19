import Card from "../../UI/Cards/Card";
import { noteStyle } from "./Note.css";

const Notes = (props: any) => {
  return (
    <Card className={noteStyle}>
      <p>Sample note</p>
    </Card>
  );
};

export default Notes;
