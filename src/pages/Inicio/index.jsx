import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto1.png";
import fotoCabelo from "../../assets/foto-cabelo.png";
import fotoEpilacao from "../../assets/foto-epilacao.png";
import fotoMaquiagem from "../../assets/foto-maquiagem.png";
import fotoSobrancelha from "../../assets/foto-sobrancelha.png";
import fotoPenteados from "../../assets/foto-penteados.png";
import LinkServico from "../../components/LinkServico";
import "./style.css";
import { Form } from "react-router-dom";

export default function Inicio() {
  return (
    <main>
      <section id="inicio">
        <div className="texto">
          <h1 className="titulo">Renata Melo Beleza</h1>
          <p className="subtitulo">Levando a beleza até você</p>
        </div>
        <img
          src={foto}
          alt="Mulher sorrindo usando batom vermelho, de cabelo preto liso até os ombros e uma blusa preta de manga comprida."
        />
      </section>
      <section id="servicos">
        <h2>Servicos</h2>
        <div className="lista-servicos">
          <LinkServico nome={"Cabelo"} imagem={fotoCabelo} link={"1"} />
          <LinkServico nome={"Maquiagem"} imagem={fotoMaquiagem} link={"2"} />
          <LinkServico nome={"Penteados"} imagem={fotoPenteados} link={"3"} />
          <LinkServico
            nome={"Design de Sobrancelha"}
            imagem={fotoSobrancelha}
            link={"4"}
          />
          <LinkServico nome={"Epilação"} imagem={fotoEpilacao} />
        </div>
      </section>
      <section id="sobre-mim">
        <img src={foto2} alt="" />
        <div>
          <h2>Sobre Mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            iusto nobis, aspernatur omnis iure temporibus odit exercitationem at
            corporis cum totam possimus molestiae natus nulla, blanditiis
            tempora. Architecto, corrupti fugiat!
          </p>
        </div>
      </section>
      <section id="atendimento">
        <h2>Atendimento</h2>
        <p>Atendimento em domicílio <br /> <span>Apenas com horário marcado</span> <br /> De domingo a sábado, das 08h às 20h</p>
      </section>
      <section id="contato">
        
      </section>
    </main>
  );
}
