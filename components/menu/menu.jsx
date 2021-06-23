import { Menu } from "./style";
import MenuFooter from "./footer/menuFooter";

export default function Nav() {
  return (
    <Menu>
      <ul>
        <div>
          <li>
            <a>INICIO</a>
          </li>
        </div>
        <li>
          <a>BAR A.DRINKS</a>
          <p>Conheça nosso serviços do bar</p>
        </li>
        <li>
          <a>CAISHOTS</a>
          <p>Conheça nosso serviços do bar</p>
        </li>
        <li>
          <a>CAISHOTS</a>
          <p>Conheça nosso serviços do bar</p>
        </li>
        <li>
          <a>CONSULTORIA</a>
          <p>Conheça nosso serviços do bar</p>
        </li>
        <li>
          <span>FALE CONOSCO</span>
        </li>
        <MenuFooter />
      </ul>
    </Menu>
  );
}
