import { Footer } from "./style";
import Insta from "../../../assets/img/insta.png";
import Face from "../../../assets/img/face.png";

export default function MenuFooter() {
  return (
    <Footer>
      <div className="rodape">
        <div className="icons">
          <a href="https://google.com">
            <img src={Face} alt="face" className="icon" />
          </a>
          <a href="https://google.com">
            <img src={Insta} alt="insta" className="icon" />
          </a>
        </div>
        <div className="info">
          <span>TELEFONE</span>
          <p>(65)9 9999-9999</p>
        </div>
        <div className="info">
          <span>EMAIL</span>
          <p>conta@adrinks.com</p>
        </div>
      </div>
    </Footer>
  );
}
