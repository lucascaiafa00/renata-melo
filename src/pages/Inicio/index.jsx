import foto from "../../assets/foto.png";
import "./style.css";

export default function Inicio() {
  return (
    <main>
      <section id="inicio">
        <div className="texto">
          <h1 className="titulo">Renata Melo</h1>
          <h2 className="subtitulo">Levando a beleza até você</h2>
        </div>
        <img
          src={foto}
          alt="Mulher sorrindo usando batom vermelho, de cabelo preto liso até os ombros e uma blusa preta de manga comprida."
        />
      </section>
      <section id="sobre-mim">
      </section>
      <section id="servicos">
      </section>
      <section id="atendimento">
      </section>
      <section id="contato">
      </section>
    </main>
  );
}
