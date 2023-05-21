import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/vars.css";

export const noteStyle = style({
  height: "auto",
  maxWidth: "30%",
  border: `${vars.effects.border} !important`,
  position: "absolute",
  top: "470px",
  left: "1300px",

});
