import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import "./style.css";

export default function Header() {
  return (
    <header>
      <ul className="links">
        <li>
          <HashLink smooth to="/#sobre-mim">Sobre Mim</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#servicos">Serviços</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#inicio">
            <img className="logo" src={logo} alt="logotipo" />
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#atendimento">Atendimento</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contato">Contato</HashLink>
        </li>
      </ul>
    </header>
  );
}
