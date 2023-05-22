import { style } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const app = style({
  textAlign: "center",
  color: vars.colors.textColor,
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: vars.colors.backgroundColor,
  backgroundSize: vars.dimensions.bgSize,
  position: "absolute",
  zIndex: "0",
 
  // overflow: "scroll",
});

export const p = style({
  color: vars.colors.textColorSecondary,
  width: "100%",
});

export const h1 = style({
  color: vars.colors.textColorSecondary,
  fontSize: "1.5rem",
  fontWeight: "400",
  position: "fixed",
  top: "10px",
});

export const container = style({
  textAlign: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "4",
});
