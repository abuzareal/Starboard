import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const btnStyle = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  minWidth: "50%",
  height: "30px",
  padding: "2px",
  background: vars.colors.glassBg,
  backdropFilter: "blur(10px)",
  borderRadius: "40px",
  border: vars.effects.border,
  position: "relative",
  transform: "scale(0.8)",
});

export const dark = style({
  background: "#fff",
  border: "1px solid #000",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  marginLeft: "0px",
  padding: "2px",
});

export const light = style({
  background: "#000",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  marginLeft: "calc(100% - 25px)",
});
