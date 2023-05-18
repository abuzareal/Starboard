import Card from "./../Cards/Card";
import { noteStyle } from "./Notes.css";

const Notes = (props: any) => {
  return (
    <Card className={noteStyle}>
      <p>Sample note</p>
    </Card>
  );
};

export default Notes;
