import { style } from "@vanilla-extract/css";

export const btnStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "40px",
  borderRadius: "40px",
});

export const dark = style({
  backgroundColor: "#000",
  color: "#fff",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
});

export const light = style({
  backgroundColor: "#fff",
  color: "#000",
});
