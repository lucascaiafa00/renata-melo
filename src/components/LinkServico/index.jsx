import { Link } from "react-router-dom";
import "./style.css";

export default function LinkServico({ nome, link, imagem }) {
  return (
    <div className="diamond" style={{ backgroundImage: `url(${imagem})` }}>
      <p>{nome}</p>
      {link ? <Link className="link-servico" to={`/galeria/${link}`}>Ver Galeria</Link> : ""}
    </div>
  );
}
