import { style } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const app = style({
  textAlign: "center",
  color: vars.colors.textColor,
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: vars.colors.backgroundColor,
  backgroundSize: vars.dimensions.bgSize,
  position: "relative",
  zIndex: "0",
});

export const p = style({
  color: vars.colors.textColorSecondary,
  width: "100%",
});

export const h1 = style({
  color: vars.colors.textColorSecondary,
  fontSize: "1.5rem",
  fontWeight: "400",
  position: "absolute",
  top: "10px",
});

export const container = style({
  textAlign: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: "4",
});
