import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const customGrey = {
  ...grey,
  "400": "#a6a6a6",
  "300": "#e6e6e7",
  "200": "#f1f1f2",
  "100": "#f6f6f7",
  "50": "#fbfbfc",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F2830",
      light: "#1DC9D4",
    },
    success: {
      main: "#2EE297",
    },
    warning: {
      main: "#FFCB47",
    },
    error: {
      main: "#d4291d",
    },
    secondary: customGrey,
  },
});

export default theme;
