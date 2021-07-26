import Header from "../components/header/header";
import Body from "../components/body/body";
import Contato from "../components/contato/contato";
import Footer from "../components/footer/footer";
import Background from "../components/background/index";
import Slide from "../components/slide/slide";
import Slider from "../components/slider/slider";
import { SliderData } from "../components/data";
import { useState } from "react";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export default function Home() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    console.log(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Slide className="slide-container" slides={SliderData} />
      <Body theme={theme} />
      <Slider />
      <Contato />
      <Footer />
      <GlobalStyle />
      <Background home={true} theme={theme} />
    </ThemeProvider>
  );
}
