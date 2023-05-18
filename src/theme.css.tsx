import {
  createGlobalTheme,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fontFamily: `'Roboto', sans-serif`,
  fontSize: "12px",
  margin: "0",
  padding: "0",
});

const darkGrid = `  linear-gradient(-90deg,rgba(255, 255, 255, 0.04)1px,transparent 1px    ),    
linear-gradient(rgba(255, 255, 255, 0.04)1px 1px, transparent 1px),    
linear-gradient(-90deg, rgba(255, 255, 255, 0.04)1px 1px, transparent 1px),    
linear-gradient(rgba(255, 255, 255, 0.04)1px 1px, transparent 1px),    
linear-gradient(      transparent 3px,      #000000 3px,#000000 78px, transparent 78px    ),    
linear-gradient(-90deg, rgba(73, 73, 73,1) 1px, transparent 1px),    
linear-gradient(      -90deg,      transparent 3px,      #000000 3px,#000000 78px,transparent 78px ),
linear-gradient(rgb(73, 73, 73, 1) 1px, transparent 1px), #000;

`;

const lightGrid = `linear-gradient(-90deg,rgba(0, 0, 0, 0.04)1px,transparent 1px    ),
linear-gradient(rgba(0, 0, 0, 0.04)1px 1px, transparent 1px),
linear-gradient(-90deg, rgba(0, 0, 0, 0.04)1px 1px, transparent 1px),
linear-gradient(rgba(0, 0, 0, 0.04)1px 1px, transparent 1px),
linear-gradient(      transparent 3px,      #fff 3px,#fff 78px, transparent 78px    ),
linear-gradient(-90deg, rgba(12, 12, 12,1) 1px, transparent 1px),
linear-gradient(      -90deg,      transparent 3px,      #fff 3px,#fff 78px,transparent 78px ),
linear-gradient(rgb(12, 12, 12, 1) 1px, transparent 1px), #fff;
`;

export const theme = createThemeContract({
  styleTheme: {
    background: null,
    backgroundSecondary: null,
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
  },
});

export const darkTheme = createTheme(theme, {
  styleTheme: {
    background: darkGrid,
    backgroundSecondary: "#2f2f2f",
    border: "#3f3f3f",
    textinPlaceHolder: "#5f5f5f",
    inputText: "#7f7f7f",
    noteText: "#9f9f9f",
    buttonPrimary: "#afafaf",
    buttonSecondary: "#bfbfbf",
    focus: "#cfcfcf",
    blur: "#dfdfdf",
    selected: "",
    bgSize: `4px 4px, 4px 4px, 
80px 80px, 80px 80px, 80px 80px, 
80px 80px,80px 80px, 80px 80px;`,
  },
});

export const lightTheme = createTheme(theme, {
  styleTheme: {
    background: lightGrid,
    backgroundSecondary: "#efefef",
    border: "#dfdfdf",
    textinPlaceHolder: "#bfbfbf",
    inputText: "#9f9f9f",
    noteText: "#7f7f7f",
    buttonPrimary: "#6f6f6f",
    buttonSecondary: "#5f5f5f",
    focus: "#4f4f4f",
    blur: "#3f3f3f",
    selected: "",
    bgSize: `4px 4px, 4px 4px,
80px 80px, 80px 80px, 80px 80px,
80px 80px,80px 80px, 80px 80px`,
  },
});

export const vars = { ...root, ...theme };
