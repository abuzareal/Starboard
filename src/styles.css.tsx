import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const grad = `  linear-gradient(-90deg,rgba(255, 255, 255, 0.075)1px,transparent 1px    ),    
linear-gradient(rgba(255, 255, 255, 0.075)1px 1px, transparent 1px),    
linear-gradient(-90deg, rgba(255, 255, 255, 0.075)1px 1px, transparent 1px),    
linear-gradient(rgba(255, 255, 255, 0.075)1px 1px, transparent 1px),    
linear-gradient(      transparent 3px,      #000000 3px,#000000 78px, transparent 78px    ),    
linear-gradient(-90deg, rgba(73, 73, 73,1) 1px, transparent 1px),    
linear-gradient(      -90deg,      transparent 3px,      #000000 3px,#000000 78px,transparent 78px ),
linear-gradient(rgb(73, 73, 73, 1) 1px, transparent 1px), #000;
background-size: 4px 4px, 4px 4px, 
80px 80px, 80px 80px, 80px 80px, 
80px 80px,80px 80px, 80px 80px;
`;
export const app = style({
  textAlign: "center",
  fontFamily: `'Roboto', sans-serif`,
  color: vars.styleTheme.inputText,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: grad,
  backgroundColor: "#000",
});
