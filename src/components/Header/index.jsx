import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import "./style.css";

export default function Header() {
  return (
    <header>
      <ul className="links">
        <li>
          <HashLink smooth to="/#sobre-mim" className="link-section link-text">Sobre Mim</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#servicos" className="link-section link-text">Serviços</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#inicio" className="link-section">
            <img className="logo" src={logo} alt="logotipo" />
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#atendimento" className="link-section link-text">Atendimento</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contato" className="link-section link-text">Contato</HashLink>
        </li>
      </ul>
    </header>
  );
}
