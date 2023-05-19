import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const inputStyle = style({
  height: "3.5rem",
  width: "250px",
  borderRadius: vars.styleTheme.borderRadiusInner,
  border: vars.styleTheme.border,
  background: "#111111",
  margin: "1.25%",
});

export const formStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const buttonStyle = style({
  height: "3.5rem",
  width: "4rem",
  borderRadius: vars.styleTheme.borderRadiusInner,
  border: vars.styleTheme.border,
  background: vars.styleTheme.backgroundSecondary,
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  margin: "1%",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  ":hover": {
    background: "#222222aa",
    color: vars.styleTheme.noteText,
  },
});
