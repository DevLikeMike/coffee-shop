import "../styles/index.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "@/config/ThemeConfig";
import { AuthProvider } from "@/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
