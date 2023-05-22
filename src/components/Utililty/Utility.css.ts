import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const untilStyle = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  padding: "7px",
  width: "175px",
  height: "175px",
  borderRadius: vars.dimensions.borderRadiusOuterOuter,
  position: "fixed",
  boxShadow: `${vars.effects.boxShadow}`,
  backdropFilter: "blur(10px) ",
  right: "10px",
  zIndex: "2",


  //  write after pseudo element
});
