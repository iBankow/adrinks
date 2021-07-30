import { Menu } from "./style";
import MenuFooter from "./footer/menuFooter";

export default function Nav() {
  return (
    <Menu>
      <ul>
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/bar">BAR A.DRINKS</a>
          <p>Conheça nosso serviços do bar</p>
        </li>
        <li>
          <a href="/caishots">CAISHOTS</a>
          <p>Conheça nosso serviços do bar</p>
        </li>
        <li>
          <a href="/consultoria">CONSULTORIA</a>
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
