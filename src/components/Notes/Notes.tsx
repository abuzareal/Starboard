import React from "react";
import Note from "./Note/Note";
import { notestyles } from "./Notes.css";

function Notes(props: any) {
  return (
    <div className={notestyles}>
      <Note />
    </div>
  );
}

export default Notes;
