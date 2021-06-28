import Image from "next/image";
import crew from "../../public/assets/img/crew.jpg";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";
import Background from "../../components/background/index";
import divisor from "../../public/assets/img/divisor-3.svg";
import beer from "../../public/assets/img/beer.svg";

import { Head } from "./style";

export default function Consultoria() {
  return (
    <>
      <Header />
      <Head>
        <div className="container">
          <h1>Consultoria</h1>
          <div className="content">
            <div className="info">
              <p>
                Proporcione o seu bar ou restaurante em ter um potencial muito
                maior do que imagina
              </p>
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
            <Image src={divisor} alt="beer-logo" />
          </div>
          <div className="services-container">
            <div className="service-content">
              <div className="img">
                <Image src={beer} alt="beer-logo" />
              </div>
              <div className="info">
                <h3>Bartender</h3>
                <p>
                  Quae vero auctorem tractata ab fiducia dicuntur. Quam temere
                  in vitiis, legem .
                </p>
              </div>
            </div>
            <div className="service-content">
              <div className="img">
                <Image src={beer} alt="beer-logo" />
              </div>
              <div className="info">
                <h3>Bartender</h3>
                <p>
                  Quae vero auctorem tractata ab fiducia dicuntur. Quam temere
                  in vitiis, legem .
                </p>
              </div>
            </div>
            <div className="service-content">
              <div className="img">
                <Image src={beer} alt="beer-logo" />
              </div>
              <div className="info">
                <h3>Bartender</h3>
                <p>
                  Quae vero auctorem tractata ab fiducia dicuntur. Quam temere
                  in vitiis, legem .
                </p>
              </div>
            </div>
            <div className="service-content">
              <div className="img">
                <Image src={beer} alt="beer-logo" />
              </div>
              <div className="info">
                <h3>Bartender</h3>
                <p>
                  Quae vero auctorem tractata ab fiducia dicuntur. Quam temere
                  in vitiis, legem .
                </p>
              </div>
            </div>
          </div>
        </section>
      </Head>
      <Slider />
      <Footer />
      <Background />
    </>
  );
}
