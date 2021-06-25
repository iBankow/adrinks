import { Menu } from "./style";
import Link from "next/link";
import MenuFooter from "./footer/menuFooter";

export default function Nav() {
  return (
    <Menu>
      <ul>
        <li>
          <Link href="/">
            <a>INICIO</a>
          </Link>
        </li>
        <li>
          <Link href="/bar">
            <a>BAR A.DRINKS</a>
          </Link>
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
