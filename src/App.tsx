import { ThemeProvider } from "styled-components";
import LogoImg from "./assets/logo.svg";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <img src={LogoImg} alt="" />
    </ThemeProvider>
  );
}
