import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Times New Roman", serif',
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);