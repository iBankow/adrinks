import Image from "next/image";
import crew from "../../public/assets/img/crew.jpg";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";
import divisor from "../../public/assets/img/divisor-3.svg";
import beer from "../../public/assets/img/beer.svg";

import { Head } from "./style";
import { useEffect, useState } from "react";
import { directus } from "../../services/api";

import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import GlobalStyle from "../../styles/global";

export default function Consultoria() {
  const [title, setTitle] = useState([]);
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState(light);

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
              <Image src={crew} alt="crew" objectFit="fill" className="img" />
            </div>
          </div>
        </div>
        <section className="services">
          <div className="services-title">
            <h2>SERVIÇOS</h2>
            <p>Serviços do pacote do bar a.drinks</p>
            <Image src={divisor} alt="divisor" />
          </div>
          <div className="services-container">
            {items.map((item) => {
              return (
                <div key={item.map} className="service-content">
                  <div className="img">
                    <Image src={beer} alt="beer-logo" />
                  </div>
                  <div className="info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Head>
      <Slider />
      <Footer />
      <GlobalStyle />
      <Background theme={theme} />
    </ThemeProvider>
  );
}
