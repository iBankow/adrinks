import { Main, Head, Assets } from "./style";
import leaves from "../../assets/img/leaves.png";
import ellipse from "../../assets/img/ellipse.svg";
import beer from "../../assets/img/beer.svg";
import beerDark from "../../assets/img/beerdark.svg";
import divisor from "../../assets/img/divisor-3.svg";
import divisorDark from "../../assets/img/divisor-dark.svg";
import { directus } from "../../services/api";
import { useEffect, useState } from "react";

export default function Body({ theme, bar }) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    async function loadItems() {
      const services = await directus.get(
        "items/services?filter[local][_eq]=1"
      );
      setItems(services.data.data);
    }
    loadItems();
  }, []);

  useEffect(() => {
    async function loadTitle() {
      const titles = await directus.get("items/imagens?filter[local][_eq]=bar");
      setTitle(titles.data.data[0]);
    }
    loadTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main bar={bar}>
      {title !== null && (
        <Head>
          <div className="img">
            <img
              src={`http://adrinks-painel.host.zukt.cloud/assets/${title.imagem}`}
              alt="crew"
              width="548"
              height="355"
              className="imagem"
            />
          </div>
          <div className="info">
            <h2>{title.title}</h2>
            <hr className="divider" />
            <p>{title.desc}</p>
            <button>FAZER ORÇAMENTO</button>
            <Assets>
              <div className="leaves">
                <img src={leaves} alt="leave" />
              </div>
              <div className="ellipse">
                <img src={ellipse} alt="ellipse" />
              </div>
            </Assets>
          </div>
        </Head>
      )}
      <section className="services">
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
      </section>
      <div
        className={theme.title === "dark" ? "img-test dark" : "img-test"}
      ></div>
    </Main>
  );
}
