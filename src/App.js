import Routes from "./routes";

import Header from "./components/header/header";
import Background from "./components/background";

import { ThemeProvider } from "styled-components";
import usePersistedState, {
  usePersistedLocation,
} from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global.js";
import Footer from "./components/footer/footer";

let hour = new Date().getHours();
if (6 < hour || hour < 18) {
  hour = light;
} else {
  hour = dark;
}

export default function App() {
  const [theme, setTheme] = usePersistedState("theme", hour);
  const [local, setLocal] = usePersistedLocation("home");

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  function toggleLocation(res) {
    setLocal(res);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes theme={theme} setLocation={toggleLocation} />
      <GlobalStyle />
      <Footer />
      <Background handleLocation={local} theme={theme} />
    </ThemeProvider>
  );
}
