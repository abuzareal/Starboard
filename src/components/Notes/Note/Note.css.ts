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
  maxWidth: "30%",
  border: `${vars.effects.border} !important`,
  position: "sticky",
});

export const noteStyle = style({
  height: "auto",
  maxWidth: "30%",
  border: `${vars.effects.border} !important`,
  position: "sticky",
});
