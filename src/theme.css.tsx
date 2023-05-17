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
  },
});

export const themeDark = createTheme(theme, {
  styleTheme: {
    background: "#1f1f1f",
    backgroundSecondary: "#2f2f2f",
    border: "#3f3f3f",
    textinPlaceHolder: "#5f5f5f",
    inputText: "#7f7f7f",
    noteText: "#9f9f9f",
    buttonPrimary: "#afafaf",
    buttonSecondary: "#bfbfbf",
    focus: "#cfcfcf",
    blur: "#dfdfdf",
  },
});

export const themeLight = createTheme(theme, {
  styleTheme: {
    background: "#ffffff",
    backgroundSecondary: "#efefef",
    border: "#dfdfdf",
    textinPlaceHolder: "#bfbfbf",
    inputText: "#9f9f9f",
    noteText: "#7f7f7f",
    buttonPrimary: "#6f6f6f",
    buttonSecondary: "#5f5f5f",
    focus: "#4f4f4f",
    blur: "#3f3f3f",
  },
});

export const vars = { ...root, ...theme };
