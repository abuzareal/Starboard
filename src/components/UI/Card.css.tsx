import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";
import { reduceEachLeadingCommentRange } from "typescript";

export const card = style({
  textAlign: "left",
  borderRadius: vars.styleTheme.borderRadiusOuter,
  background: vars.styleTheme.background,
  border: "2px solid red",
});
