import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  breakpoints: {
    xs: "30em",
    sm: "64em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  colors: {
    dark: [
      "#FAFAFB",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#00589F",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#39C2F1",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
  },
});
