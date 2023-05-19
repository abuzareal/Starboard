import { style } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const app = style({
  textAlign: "center",
  color: vars.styleTheme.noteText,
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: vars.styleTheme.background,
  backgroundSize: vars.styleTheme.bgSize,
  position: "relative",
  zIndex: "0",
});

export const p = style({
  color: vars.styleTheme.noteText,
  width: "100%",
});

export const h1 = style({
  color: vars.styleTheme.h1Color,
  fontSize: "2.5rem",
  fontWeight: "400",
  margin: "0",
});

export const container = style({
  textAlign: "center",
  color: vars.styleTheme.noteText,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: "4",
  
});
