import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const untilStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "175px",
  height: "350px",
  borderRadius: vars.dimensions.borderRadiusOuterOuter,
  position: "fixed",
  boxShadow: vars.effects.boxShadow,
  backdropFilter: "blur(10px)",

  right: "10px",
});
