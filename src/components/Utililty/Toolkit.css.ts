import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/vars.css";

export const toolButton = style({
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "25px",
  position: "absolute",
  top: "10px",
  backgroundColor: "#bc6ff1",
  border: "1px solid #892CDC",
});

export const toolDiv = style({
  border: "1px solid gray",
  marginTop: "10px",
  height: "150px",
  width: "150px",
  borderRadius: "10px",
  position: "absolute",
  top: "60px",
  textAlign: "center",
  paddingTop: "10px",
});

export const toolKit = style({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "20px",
  flexDirection: "column",
  height: "auto",
  minHeight: "200px",
  width: "200px",
  //   border: "1px solid white",
});
