import Header from "../../components/header/header";
import Body from "../../components/body/body";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";

import GlobalStyle from "../../styles/global";

import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { useState } from "react";

export default function Bar() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Body theme={theme} />
      <Slider />
      <Footer />
      <GlobalStyle />
      <Background bar={true} theme={theme} />
    </ThemeProvider>
  );
}
