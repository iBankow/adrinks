import Header from "./components/header/header";
import Body from "./components/body/body";
import Contato from "./components/contato/contato";
import Footer from "./components/footer/footer";
import Background from "./components/background/index";
import Slide from "./components/slide/slide";
import Slider from "./components/slider/slider";
import { SliderData } from "./components/data";
import usePersistedState from "./utils/usePersistedState";

import GlobalStyle from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export default function Home() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
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
