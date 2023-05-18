import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const app = style({
  textAlign: "center",
  fontFamily: `'Roboto', sans-serif`,
  color: vars.styleTheme.inputText,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: vars.styleTheme.background,
  backgroundSize: vars.styleTheme.bgSize,
});

export const p = style({
  color: vars.styleTheme.inputText,
  width: "50%",
});

