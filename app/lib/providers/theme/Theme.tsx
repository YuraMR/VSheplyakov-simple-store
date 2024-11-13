"use client";
import { ThemeProvider } from "@mui/material";
import { MY_THEME } from "./config";

const MyTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={MY_THEME}>{children}</ThemeProvider>;
};

export default MyTheme;
