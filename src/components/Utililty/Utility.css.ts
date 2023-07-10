import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const untilStyle = style({
  display: "flex",
  justifyContent: "flex-start",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  padding: "7px",
  width: "175px",
  height: "175px",
  borderRadius: vars.dimensions.borderRadiusOuterOuter,
  boxShadow: `${vars.effects.boxShadow}`,
  backdropFilter: "blur(10px) ",
  right: "7px",
  zIndex: "1000000000000",

  //  write after pseudo element
});
