import "../styles/index.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "@/config/ThemeConfig";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
