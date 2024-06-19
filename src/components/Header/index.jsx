import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css"

export default function Header() {
  return (
    <header>
      <ul className="links">
        <li>
          <a href="#sobre-mim">Sobre Mim</a>
        </li>
        <li>
          <a href="#servicos">Serviços</a>
        </li>
        <li>
          <a href="#inicio">
            <img className="logo" src={logo} alt="logotipo" />
          </a>
        </li>
        <li>
          <a href="#atendimento">Atendimento</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </header>
  );
}
