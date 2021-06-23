import Image from "next/image";
import { Footer } from "./style";
import Insta from "../../../public/assets/img/insta.png";
import Face from "../../../public/assets/img/face.png";

export default function MenuFooter() {
  return (
    <Footer>
      <div className="rodape">
        <div className="icons">
          <div className="icon">
            <Image src={Face} alt="face" className="icon" />
          </div>
          <div className="icon">
            <Image src={Insta} alt="insta" className="icon" />
          </div>
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
