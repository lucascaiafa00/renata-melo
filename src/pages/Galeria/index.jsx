import { useParams } from "react-router-dom";
import servicosData from "../../components/ServicosData";
import "./style.css"

export default function Galeria() {
  const { id } = useParams();
  const servico = servicosData.find((item) => item.id === parseInt(id));

  if (!servico) {
    return <div>Serviço não encontrado</div>;
  }

  return (
    <section className="galeria">
      <h1 className="titulo-servico">{servico.servico}</h1>
      <div className="container-galeria">
      {servico.imagens.length > 0 ? (
        servico.imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`${servico.servico} ${index + 1}`}
            className="imagem-galeria"
          />
        ))
      ) : (
        <p>Sem imagens disponíveis</p>
      )}
      </div>
    </section>
  );
}
