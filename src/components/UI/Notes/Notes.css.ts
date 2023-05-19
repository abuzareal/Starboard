import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/vars.css";

export const noteStyle = style({
  minWidth: "50px",
  minHeight: "10px",
  height: "auto",
  maxWidth: "30%",
  border: vars.styleTheme.notesborder,
});
