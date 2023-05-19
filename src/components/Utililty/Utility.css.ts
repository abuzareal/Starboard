import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const untilStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "175px",
  height: "350px",
  borderRadius: vars.dimensions.borderRadiusInner,
  position: "fixed",
  boxShadow: "0px 0px 15px  #00000055",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  right: "10px",
});
