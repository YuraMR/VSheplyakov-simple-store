import type { Metadata } from "next";
import { Box } from "@mui/material";

import "./globals.css";
import MyTheme from "./lib/providers/theme/Theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./lib/providers/CartProvider/CartProvider";

export const metadata: Metadata = {
  title: "Simple Store",
  description: "A simple store"
};

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <MyTheme>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh"
              }}
            >
              <Header />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </MyTheme>
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
