import { Main } from "./style";
import mapa from "../../public/assets/img/Mapa.png";

export default function Contato() {
  return (
    <Main>
      <div className="container">
        <div className="form">
          <form>
            <h2>Contato</h2>
            <input placeholder="Nome" type="text" />
            <input placeholder="E-mail" type="text" />
            <input placeholder="Telefone" type="text" />
            <input placeholder="Messagem" type="text" />
            <button>Enviar</button>
          </form>
        </div>
        <div className="contato">
          <div className="infos">
            <div className="info-one">
              <div>
                <span>Onde estamos</span>
                <p>
                  Quae vero auctorem tractata ab fiducia dicuntur. Quam temere.
                </p>
              </div>
              <button>VER MAPA</button>
            </div>
            <div className="info-two">
              <div>
                <span>Telefone</span>
                <p>(65) 9999-9999</p>
              </div>
              <div>
                <span>Email</span>
                <p>contato@adrinks.com.br</p>
              </div>
            </div>
          </div>
          <img src={mapa} alt="mapa" className="map" />
        </div>
      </div>
    </Main>
  );
}
