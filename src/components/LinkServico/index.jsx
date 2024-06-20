import "./style.css";
export default function LinkServico({nome,link}) {
    return (
      <div className="diamond">
        <p>{nome}</p>
        <a href={link}>Ver Galeria</a>
      </div>
    )
  }
  