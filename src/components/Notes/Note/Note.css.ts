import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../../styles/vars.css";

const pulsate = keyframes({
  "0%": {
    boxShadow: "0px 0px 0px 0px #8f43ee00",
  },
  "50%": {
    boxShadow: "0px 0px 100px 5px #8f43ee",
  },
  "100%": {
    boxShadow: "0px 0px 0px 0px #8f43ee00",
  },
});

export const animation = style({
  animation: `${pulsate} 1.3s ease infinite`,
  height: "auto",
  maxWidth: "20%",
  border: `${vars.effects.border} !important`,
  position: "relative",
  cursor: "move",

  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "70%",
    },
  },
});

export const noteStyle = style({
  height: "auto",
  maxWidth: "20%",
  border: `${vars.effects.border} !important`,
  position: "relative",
  cursor:"move",

  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "70%",
    },
  },
});

export const divStyle = style({
  height: "fit-content",
  padding: "10px",
});

export const p = style({
  color: vars.colors.textColorSecondary,
  opacity: "0.8",
  fontSize: "12px",
  position: "absolute",
  marginTop: "10px",
});
