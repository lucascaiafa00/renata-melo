import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

export default function LinkServico({ nome, link, imagem, descricao }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container-servico">
      <div
        className={`background-servico ${isHovered ? "blur" : ""}`}
        style={{ backgroundImage: `url(${imagem})` }}
      ></div>
      {link ? (
        <Link
          className="link-servico"
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          to={`/galeria/${link}`}
        >
          Ver Galeria
        </Link>
      ) : (
        ""
      )}
      <h3>{nome}</h3>
      <p className="descricao-servico">{descricao}</p>
    </div>
  );
}
