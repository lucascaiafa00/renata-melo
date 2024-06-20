import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto1.png";
import LinkServico from "../../components/LinkServico";
import "./style.css";

export default function Inicio() {
  return (
    <main>
      <section id="inicio">
        <div className="texto">
          <h1 className="titulo">Renata Melo</h1>
        </div>
        <img
          src={foto}
          alt="Mulher sorrindo usando batom vermelho, de cabelo preto liso até os ombros e uma blusa preta de manga comprida."
        />
      </section>
      <section id="divider">
        <p>Levando a beleza até você</p>
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
      <section id="servicos">
        <h2>Servicos</h2>
        <div className="lista-servicos">
          <LinkServico nome={"Cortes"} />
          <LinkServico nome={"Maquiagem"} />
          <LinkServico nome={"Penteados"} />
          <LinkServico nome={"Epilação"} />
          <LinkServico nome={"Sobrancelha"} />
        </div>
      </section>
      <section id="atendimento"></section>
      <section id="contato"></section>
    </main>
  );
}
