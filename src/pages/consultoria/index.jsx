import crew from "../../public/assets/img/crew.jpg";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";
import divisor from "../../public/assets/img/divisor-3.svg";
import divisorDark from "../../public/assets/img/divisordark.svg";
import beer from "../../public/assets/img/beer.svg";
import beerDark from "../../public/assets/img/beerdark.svg";

import { Head, Body } from "../../components/consultoria/style";
import { useEffect, useState } from "react";
import { directus } from "../../services/api";

import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import GlobalStyle from "../../styles/global";
import usePersistedState from "../../utils/usePersistedState";

export default function Consultoria() {
  const [title, setTitle] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const services = await directus.get(
        "items/services?filter[local][_eq]=2"
      );
      setItems(services.data.data);
    }
    loadItems();
  }, []);

  useEffect(() => {
    async function loadTitle() {
      const titles = await directus.get(
        "items/imagens?filter[local][_eq]=consultoria"
      );
      setTitle(titles.data.data[0]);
    }
    loadTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    console.log(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Head>
        <div className="container">
          <h1>{title.title}</h1>
          <div className="content">
            <div className="info">
              <p>{title.desc}</p>
              <button>ORÇAMENTO</button>
            </div>
            <div className="image-container">
              <img src={crew} alt="crew" objectFit="fill" className="img" />
            </div>
          </div>
        </div>
      </Head>

      <Body>
        <div className="services">
          <div className="services-title">
            <h2>SERVIÇOS</h2>
            <p>Serviços do pacote do bar a.drinks</p>
            {theme.title === "dark" ? (
              <img src={divisorDark} className="divisor-2" alt="divisor" />
            ) : (
              <img src={divisor} className="divisor-2" alt="divisor" />
            )}
          </div>
          <div className="services-container">
            {items.map((item) => {
              return (
                <div key={item.map} className="service-content">
                  <div className="img">
                    {theme.title === "dark" ? (
                      <img src={beerDark} alt="beer-logo" />
                    ) : (
                      <img src={beer} alt="beer-logo" />
                    )}
                  </div>
                  <div className="info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Body>
      <Slider />
      <Footer />
      <GlobalStyle />
      <Background theme={theme} content={true} hiddenOverflow={true} />
    </ThemeProvider>
  );
}
