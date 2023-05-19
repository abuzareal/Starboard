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
    borderRadius: vars.styleTheme.borderRadiusOuter,
    background: vars.styleTheme.backgroundSecondary,
    border: vars.styleTheme.border,
    padding: "1%",
    margin: "1%",
    width: "fit-content",
    boxShadow: "0px 0px 15px  #00000055",
  },
  glassy: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: vars.styleTheme.borderRadiusOuter,
    background: "#3333334f",
    border: vars.styleTheme.border,
    padding: "2.5%",
    margin: "1%",
    width: "fit-content",
    boxShadow: "0px 0px 15px  #00000055",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },
});
