import {
  createGlobalTheme,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fontFamily: "Maven Pro, sans-serif",

  fontSize: "12px",
  margin: "0",
  padding: "0",
});

const darkGrid = `  linear-gradient(-90deg,rgba(255, 255, 255, 0.04)1px,transparent 1px    ),    
linear-gradient(rgba(255, 255, 255, 0.04)1px 1px, transparent 1px),    
linear-gradient(-90deg, rgba(255, 255, 255, 0.04)1px 1px, transparent 1px),    
linear-gradient(rgba(255, 255, 255, 0.04)1px 1px, transparent 1px),    
linear-gradient(      transparent 3px,      #000000 3px,#000000 78px, transparent 78px    ),    
linear-gradient(-90deg, rgba(73, 73, 73,0.5) 1px, transparent 1px),    
linear-gradient(      -90deg,      transparent 3px,      #000000 3px,#000000 78px,transparent 78px ),
linear-gradient(rgb(73, 73, 73, 0.5) 1px, transparent 1px), #000;

`;

const lightGrid = `linear-gradient(-90deg,rgba(0, 0, 0, 0.04)1px,transparent 1px    ),
linear-gradient(rgba(0, 0, 0, 0.04)1px 1px, transparent 1px),
linear-gradient(-90deg, rgba(0, 0, 0, 0.04)1px 1px, transparent 1px),
linear-gradient(rgba(0, 0, 0, 0.04)1px 1px, transparent 1px),
linear-gradient(      transparent 3px,      #fff 3px,#fff 78px, transparent 78px    ),
linear-gradient(-90deg, rgba(12, 12, 12,0.5) 1px, transparent 1px),
linear-gradient(      -90deg,      transparent 3px,      #fff 3px,#fff 78px,transparent 78px ),
linear-gradient(rgb(12, 12, 12, 0.5) 1px, transparent 1px), #fff;
`;

export const theme = createThemeContract({
  //  colors only !!!!!!!!!!!!!!!!!!!
  colors: {
    backgroundColor: null,
    bgSize: null,
    accentColor: null,
    headingColor: null,
  },
  effects: {
    boxShadow: null,
  },
});

export const darkTheme = createTheme(theme, {
  colors: {
    backgroundColor: darkGrid,
    accentColor: "#892CDC",
    bgSize: `4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px,80px 80px,80px 80px, 80px 80px`,
    headingColor: "#fff",
  },
  effects: {
    boxShadow: "0px 0px 15px  #00000055",
  },
});

export const lightTheme = createTheme(theme, {
  colors: {
    backgroundColor: lightGrid,
    accentColor: "#892CDC",
    bgSize: `4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px,80px 80px,80px 80px, 80px 80px`,
    headingColor: "#000",
  },
  effects: {
    boxShadow: "0px 0px 15px  #00000055",
  },
});

export const vars = { ...root, ...theme };
