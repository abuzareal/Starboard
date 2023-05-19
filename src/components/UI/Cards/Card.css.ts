import { styleVariants } from "@vanilla-extract/css";
import { vars } from "../../../styles/vars.css";

// export const cardStyle = style({
//   textAlign: "left",
//   borderRadius: vars.styleTheme.borderRadiusOuter,
//   background: vars.styleTheme.backgroundSecondary,
//   border: vars.styleTheme.border,
//   padding: "1%",
//   margin: "1%",
//   width: "fit-content",
//   boxShadow: "0px 0px 15px  #00000055",
// });

export const cardStyle = styleVariants({
  default: {
    textAlign: "left",
    width: "fit-content",
    borderRadius: vars.dimensions.borderRadiusOuter,
    border: vars.effects.border,
    boxShadow: vars.effects.boxShadow,
    background: vars.colors.accentColor,
    padding: "1%",
    margin: "1%",
    height: "auto",
  },
  glass: {
    textAlign: "left",
    width: "fit-content",
    borderRadius: vars.dimensions.borderRadiusOuter,
    border: vars.effects.border,
    boxShadow: vars.effects.boxShadow,
    background: vars.colors.glassBg,
    color: vars.colors.textColorSecondary,
    padding: "1%",
    margin: "1%",
    height: "auto",
    backdropFilter: vars.effects.blur,
  },
});
