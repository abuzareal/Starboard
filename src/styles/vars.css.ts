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

const darkGrid = `  linear-gradient(-90deg,rgba(255, 255, 255, 0.02)1px,transparent 1px    ),    
linear-gradient(rgba(255, 255, 255, 0.02)1px 1px, transparent 1px),    
linear-gradient(-90deg, rgba(255, 255, 255, 0.02)1px 1px, transparent 1px),    
linear-gradient(rgba(255, 255, 255, 0.02)1px 1px, transparent 1px),    
linear-gradient(      transparent 3px,      #111 3px,#111 78px, transparent 78px    ),    
linear-gradient(-90deg, rgba(73, 73, 73,0.5) 1px, transparent 1px),    
linear-gradient(      -90deg,      transparent 3px,      #111 3px,#111 78px,transparent 78px ),
linear-gradient(rgba(73, 73, 73, 0.5) 1px, transparent 1px), #111;

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
  styleTheme: {
    background: null,
    backgroundSecondary: null,
    notesborder: null,
    border: null,
    textinPlaceHolder: null,
    inputText: null,
    noteText: null,
    buttonPrimary: null,
    buttonSecondary: null,
    focus: null,
    blur: null,
    selected: null,
    bgSize: null,
    pColor: null,
    h1Color: null,
    h2Color: null,
    borderRadiusOuter: null,
    borderRadiusInner: null,
  },
});

export const darkTheme = createTheme(theme, {
  styleTheme: {
    background: darkGrid,
    backgroundSecondary: "#892CDC",
    notesborder: "1px solid #ffffff55",
    border: "1px solid #ffffff55",
    textinPlaceHolder: "#5f5f5f",
    inputText: "#7f7f7f",
    noteText: "#fff",
    buttonPrimary: "#afafaf",
    buttonSecondary: "#bfbfbf",
    focus: "#cfcfcf",
    blur: "#dfdfdf",
    selected: "",
    bgSize: `4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px, 80px 80px,80px 80px, 80px 80px;`,
    pColor: "#fff",
    h1Color: "#fff",
    h2Color: "#fff",

    borderRadiusOuter: "10px",
    borderRadiusInner: "5px",
  },
});

export const lightTheme = createTheme(theme, {
  styleTheme: {
    background: lightGrid,
    bgSize: `4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px,80px 80px,80px 80px, 80px 80px`,
    backgroundSecondary: "#892CDC",
    notesborder: "1px solid rgba(0, 0, 0, 0.3)",
    border: "1px solid #dfdfdf",
    textinPlaceHolder: "#bfbfbf",
    inputText: "#fff",
    noteText: "rgba(255, 255, 255, 1)",
    buttonPrimary: "#892CDC",
    buttonSecondary: "#5f5f5f",
    focus: "#4f4f4f",
    blur: "#3f3f3f",
    selected: "",
    pColor: "#000",
    h1Color: "#000",
    h2Color: "#000",

    borderRadiusOuter: "10px",
    borderRadiusInner: "5px",
  },
});

export const vars = { ...root, ...theme };
