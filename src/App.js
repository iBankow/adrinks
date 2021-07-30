import Routes from "./routes";

import Header from "./components/header/header";
import Background from "./components/background";

import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global.js";
import Footer from "./components/footer/footer";

export default function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    console.log(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes theme={theme} />;
      <GlobalStyle />
      <Footer />
      <Background home={true} theme={theme} />
    </ThemeProvider>
  );
}
