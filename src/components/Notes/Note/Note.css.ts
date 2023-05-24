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
  maxWidth: "100%",
  border: `${vars.effects.border} !important`,
  position: "relative",
  cursor: "move",

  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
});

export const noteStyle = style({
  height: "auto",
  width: "fit-content ",
  padding: "5px",
  border: `${vars.effects.border} !important`,
  position: "relative",
  cursor: "move",

  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
});

export const divStyle = style({
  width: "fit-content",
  minWidth: "200px",
  padding: "10px",
  border: vars.effects.border,
});

export const p = style({
  color: vars.colors.textColorSecondary,
  opacity: "0.8",
  fontSize: "12px",
  position: "absolute",
  marginTop: "10px",
});
