import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/vars.css";

export const cardStyle = style({
  textAlign: "left",
  borderRadius: vars.styleTheme.borderRadiusOuter,
  background: vars.styleTheme.backgroundSecondary,
  border: vars.styleTheme.border,
  minHeight: "12px",
  maxWidth: "30%",
  padding: "1%",
  margin: "1%",
  boxShadow:"0px 0px 20px 10px #00000055"
});
