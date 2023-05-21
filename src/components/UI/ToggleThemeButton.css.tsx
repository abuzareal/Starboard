import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const btnStyle = style({
  height: "auto",
  background: vars.colors.glassBg,
  backdropFilter: "blur(10px)",
  borderRadius: "30px",
  border: vars.effects.border,
  position: "relative",
  width: "75px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const dark = style({
  background: vars.colors.glassBg,
  border: vars.effects.border,
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  color: "#fff",
  fontSize: "16px",
  textAlign: "center",
  marginLeft: "2px",
  padding: "3px",
  margin: "2px",
});

export const light = style({
  background: vars.colors.glassBg,
  border: vars.effects.border,
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  margin: " 2px calc(100% - 26px)",
  color: "#000",
  fontSize: "16px",
  padding: "3px",
  textAlign: "center",
});
