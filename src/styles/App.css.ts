import { style } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const app = style({
  textAlign: "center",
  fontFamily: `'Roboto', sans-serif`,
  color: vars.styleTheme.noteText,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: vars.styleTheme.background,
  backgroundSize: vars.styleTheme.bgSize,
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
