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
          <Link href="/caishots">
            <a>CAISHOTS</a>
          </Link>
          <p>Conheça nosso serviços do bar</p>
        </li>
        <li>
          <Link href="/consultoria">
            <a>CONSULTORIA</a>
          </Link>
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
