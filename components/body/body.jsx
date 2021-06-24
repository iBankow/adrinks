import Image from "next/image";
import { Main, Head, Assets } from "./style";
import crew from "../../public/assets/img/crew.jpg";
import leaves from "../../public/assets/img/leaves.png";
import ellipse from "../../public/assets/img/ellipse.svg";
import beer from "../../public/assets/img/beer.svg";
import divisor from "../../public/assets/img/divisor-3.svg";

export default function Body() {
  return (
    <Main>
      <Head>
        <div className="img">
          <Image src={crew} alt="crew" />
        </div>
        <div className="info">
          <h2>Bar</h2>
          <hr className="divider" />
          <p>Gallia est omnis divisa in partes tres, quarum.</p>
          <button>FAZER ORÇAMENTO</button>
          <Assets>
            <div className="leaves">
              <Image src={leaves} alt="leave" />
            </div>
            <div className="leaves two">
              <Image src={leaves} alt="leave" />
            </div>
            <div className="leave three">
              <Image src={leaves} alt="leave" />
            </div>
            <div className="ellipse">
              <Image src={ellipse} alt="ellipse" />
            </div>
          </Assets>
        </div>
      </Head>
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
                Quae vero auctorem tractata ab fiducia dicuntur. Quam temere in
                vitiis, legem .
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
                Quae vero auctorem tractata ab fiducia dicuntur. Quam temere in
                vitiis, legem .
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
                Quae vero auctorem tractata ab fiducia dicuntur. Quam temere in
                vitiis, legem .
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
                Quae vero auctorem tractata ab fiducia dicuntur. Quam temere in
                vitiis, legem .
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="img-test"></div>
    </Main>
  );
}
