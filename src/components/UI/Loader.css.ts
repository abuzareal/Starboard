import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const loader = style({
  width: "100%",
  height: "100vh",

  backgroundColor: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1",
  border: "1px solid #fffff1",
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loaderContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px",
  zIndex: "1",
});

export const spinner = style({
  width: "64px",
  height: "64px",
  border: " 5px solid",
  borderColor: ` #892CDC transparent #892CDC transparent`, // `${vars.colors.accentColor} transparent ${vars.colors.accentColor} transparent`
  borderRadius: "50%",
  position: "absolute",
  animation: `${spin} 1.2s linear infinite`,
  display: "flex",
  justifyContent: "center",
  color: "white",
});

export const emoji = style({
  position: "absolute",
  fontSize: "30px",
  color: "#fff",
});
