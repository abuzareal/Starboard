import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const btnStyle = style({
  height: "30px",
  background: vars.colors.glassBg,
  backdropFilter: "blur(10px)",
  borderRadius: "30px",
  border: vars.effects.border,
  position: "relative",
  transform: "scale(1)",
});

export const dark = style({
  background: "#fff",
  border: "1px solid #000",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  color: "#000",
  fontSize: "20px",
  textAlign: "center",
  display: "grid",
  placeItems: "center",
  marginLeft: "2px",
 
});

export const light = style({
  background: "#000",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  marginLeft: "calc(100% - 27px)",
  color: "#fff",
  fontSize: "18px",
  textAlign: "center",
  display: "grid",
  placeItems: "center",
});
