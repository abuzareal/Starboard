import React from "react";
import Note from "./Note/Note";
import { notestyles } from "./Notes.css";

function Notes(props: any) {
  return (
    <div className={notestyles}>
      {props.notes.map((note: any) => (
        <Note
          key={note.id}
          note={note.note}
          timestamp={note.timestamp}
          id={note.id}
          xpos={note.xpos}
          ypos={note.ypos}
        />
      ))}
    </div>
  );
}

export default Notes;
