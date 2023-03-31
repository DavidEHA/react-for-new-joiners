import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  export const purpleTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#8916c5",
      },
      secondary: {
        main: "#3016c5",
      },
      text: {
        primary: "#000000",
      },
    },
  });