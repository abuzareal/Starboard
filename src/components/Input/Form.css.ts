import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const formStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "7px",
});

export const inputStyle = style({
  width: "300px",
  height: "60px",
  padding: "10px",

  borderRadius: vars.dimensions.borderRadiusInner,
  border: vars.effects.border,
  background: vars.colors.bgPrimary,
  fontSize: "1rem",
  fontWeight: "400",
  color: vars.colors.textColorSecondary,

  ":focus": {
    outline: "none",
    border: `1px solid ${vars.colors.accentColor}`,
    boxShadow: `0 0 5px ${vars.colors.accentColor}`,
  },
});

export const buttonStyle = style({
  width: "70px",
  height: "60px",
  padding: "10px",
  marginLeft: "7px",
  borderRadius: vars.dimensions.borderRadiusInner,
  border: vars.effects.border,
  background: vars.colors.accentColor,
  color: vars.colors.textColor,
  fontSize: "1rem",
  fontWeight: "400",
  textAlign: "center",
  cursor: "pointer",
  ":hover": {
    background: vars.colors.supportColor,
  },
});
