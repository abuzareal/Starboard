import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";


export const cardStyle = style({
  textAlign: "left",
  borderRadius: vars.styleTheme.borderRadiusOuter,
  background: vars.styleTheme.backgroundSecondary,
  border: "2px solid red",
  minHeight: "200px",
  maxWidth: "50%",
});
