import crew from "../../assets/img/crew.jpg";
import Slider from "../../components/slider/slider";
import divisor from "../../assets/img/divisor-3.svg";
import divisorDark from "../../assets/img/divisordark.svg";
import beer from "../../assets/img/beer.svg";
import beerDark from "../../assets/img/beerdark.svg";

import { Helmet } from "react-helmet";
import { Head, Body } from "./style";
import { useEffect, useState } from "react";
import { directus } from "../../services/api";

export default function Consultoria({ theme, setLocation }) {
  useEffect(() => {
    setLocation("consultoria");
  });

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

  return (
    <>
      <Helmet>
        <title>a.drinks | Consultoria</title>
      </Helmet>
      <Head>
        <div className="container">
          <h1>{title.title}</h1>
          <div className="content">
            <div className="info">
              <p>{title.desc}</p>
              <button>ORÇAMENTO</button>
            </div>
            <div className="image-container">
              <img src={crew} alt="crew" className="img" />
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
                <div key={item.id} className="service-content">
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
    </>
  );
}
