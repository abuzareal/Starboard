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
  boxSizing: "border-box",
  scrollBehavior: "smooth",
});

const darkGrid = `  linear-gradient(-90deg,rgba(255, 255, 255, 0.05)1px,transparent 1px    ),    
linear-gradient(rgba(255, 255, 255, 0.05)1px 1px, transparent 1px),    
linear-gradient(-90deg, rgba(255, 255, 255, 0.05)1px 1px, transparent 1px),    
linear-gradient(rgba(255, 255, 255, 0.05)1px 1px, transparent 1px),    
linear-gradient(      transparent 3px,      #000000 3px,#000000 78px, transparent 78px    ),    
linear-gradient(-90deg, rgba(73, 73, 73,0.75) 1px, transparent 1px),    
linear-gradient(      -90deg,      transparent 3px,      #000000 3px,#000000 78px,transparent 78px ),
linear-gradient(rgb(73, 73, 73, 0.75) 1px, transparent 1px), #000;

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
    bgPrimary: null,
    bgSecondary: null,
    glassBg: null,
    textColorSecondary: null,
    accentColor: null,
    textColor: null,
    supportColor: null,
  },
  dimensions: {
    borderRadiusOuterOuter: null,
    borderRadiusOuter: null,
    borderRadiusInner: null,
    bgSize: null,
  },
  effects: {
    boxShadow: null,
    border: null,
    blur: null,
  },
});

export const darkTheme = createTheme(theme, {
  colors: {
    backgroundColor: darkGrid,
    bgPrimary: "#111",
    bgSecondary: "#222",
    glassBg: "rgba(17,17,17,0.5)",
    textColorSecondary: "#eee",
    textColor: "#eee",
    accentColor: "#892CDC",
    supportColor: "#bc6ff1",
  },
  dimensions: {
    borderRadiusOuterOuter: "20px",
    borderRadiusOuter: "10px",
    borderRadiusInner: "5px",
    bgSize: `4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px,80px 80px,80px 80px, 80px 80px`,
  },
  effects: {
    boxShadow:
      "0px 0px 20px rgba(17,17,17,0.5), -5px -5px 20px  #ffffff20 inset",
    border: "1px solid rgba(238,238,238,0.25)",
    blur: "blur(5px)",
  },
});

export const lightTheme = createTheme(theme, {
  colors: {
    backgroundColor: lightGrid,
    bgPrimary: "#eee",
    bgSecondary: "#ddd",
    glassBg: "rgba(238,238,238,0.5)",
    textColor: "#eee",
    textColorSecondary: "#111",
    accentColor: "#892CDC",
    supportColor: "#bc6ff1",
  },
  dimensions: {
    borderRadiusOuterOuter: "20px",
    borderRadiusOuter: "10px",
    borderRadiusInner: "5px",
    bgSize: `4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px,80px 80px,80px 80px, 80px 80px`,
  },
  effects: {
    boxShadow: "0px 0px 20px  rgba(17,17,17,0.15)",
    border: "1px solid rgba(17,17,17,0.25)",
    blur: "blur(5px)",
  },
});
export const vars = { ...root, ...theme };
