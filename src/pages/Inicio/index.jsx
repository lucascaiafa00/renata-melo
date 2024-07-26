import { motion } from "framer-motion";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto1.png";
import fotoCabelo from "../../assets/foto-cabelo.png";
import fotoEpilacao from "../../assets/foto-epilacao.png";
import fotoMaquiagem from "../../assets/foto-maquiagem.png";
import fotoSobrancelha from "../../assets/foto-sobrancelha.png";
import fotoPenteados from "../../assets/foto-penteados.png";
import LinkServico from "../../components/LinkServico";
import "./style.css";
import { useState } from "react";
import emailJs from "@emailjs/browser";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Inicio() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [menssagem, setMenssagem] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (nome === "" || email === "" || menssagem === "") {
      alert("Preencha todos os campos");
    } else {
      const templateParams = {
        from_name: nome,
        message: menssagem,
        email: email,
      };

      emailJs
        .send(
          "service_thtfqcv",
          "template_4oqbell",
          templateParams,
          "jrvrQP2b7fF13dO-j"
        )
        .then(
          (response) => {
            alert("Email enviado");
            setEmail("");
            setMenssagem("");
            setNome("");
          },
          (err) => {
            console.log("Erro: ", err);
          }
        );
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <section id="inicio">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 2 }}
          className="texto"
        >
          <h1 className="titulo">Renata Melo Beleza</h1>
          <p className="subtitulo">Levando a beleza até você</p>
        </motion.div>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 2 }}
          src={foto}
          alt="Mulher sorrindo usando batom vermelho, de cabelo preto liso até os ombros e uma blusa preta de manga comprida."
        />
      </section>
      <section id="servicos">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
        >
          Servicos
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px"  }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
          className="lista-servicos"
        >
          <LinkServico
            nome={"Cabelo"}
            imagem={fotoCabelo}
            link={"1"}
            descricao={
              "Transforme seu visual com cortes modernos, colorações vibrantes e tratamentos de alisamento."
            }
          />
          <LinkServico
            nome={"Maquiagem"}
            imagem={fotoMaquiagem}
            link={"2"}
            descricao={
              "Realce sua beleza com maquiagens profissionais para todas as ocasiões."
            }
          />
          <LinkServico
            nome={"Penteados"}
            imagem={fotoPenteados}
            link={"3"}
            descricao={
              "Perfeitos para qualquer ocasião, dos eventos casuais às celebrações especiais."
            }
          />
          <LinkServico
            nome={"Design de Sobrancelha"}
            imagem={fotoSobrancelha}
            link={"4"}
            descricao={
              "Moldamos suas sobrancelhas para realçar sua expressão e beleza natural."
            }
          />
          <LinkServico
            nome={"Epilação"}
            imagem={fotoEpilacao}
            descricao={
              "Pele suave e livre de pelos com nossas técnicas de epilação eficazes e delicadas."
            }
          />
        </motion.div>
      </section>
      <section id="sobre-mim">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px"  }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
          src={foto2}
          alt=""
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px"  }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
        >
          <h2>Sobre Mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            iusto nobis, aspernatur omnis iure temporibus odit exercitationem at
            corporis cum totam possimus molestiae natus nulla, blanditiis
            tempora. Architecto, corrupti fugiat!
          </p>
        </motion.div>
      </section>
      <section id="atendimento">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px"  }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
        >
          Atendimento
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px"  }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
        >
          Atendimento em domicílio <br />{" "}
          <span>Apenas com horário marcado</span> <br /> De domingo a sábado,
          das 08h às 20h
        </motion.p>
      </section>
      <section id="contato">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px"  }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
          className="left-contato"
        >
          <h2>Contato</h2>
          <ul className="links-contato">
            <li>
              <a className="link-contato" href="">
                <FaWhatsapp className="icone-contato" />
                (24)98108-7289
              </a>
            </li>
            <li>
              <a className="link-contato" href="">
                <MdOutlineEmail className="icone-contato" />
                renatamelobeleza@gmail.com
              </a>
            </li>
            <li>
              <a className="link-contato" href="">
                <FaInstagram className="icone-contato" />
                instagram
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px"  }}
          variants={sectionVariants}
          transition={{ duration: 2 }}
          className="formulario-contato"
          onSubmit={sendEmail}
        >
          <label className="label" htmlFor="inputNome">
            Nome
          </label>
          <input
            className="input"
            type="text"
            id="inputNome"
            placeholder="Insira seu nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          <label className="label" htmlFor="inputEmail">
            Email
          </label>
          <input
            className="input"
            type="text"
            id="inputEmail"
            placeholder="Insira seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="label" htmlFor="textArea">
            Menssagem
          </label>
          <textarea
            placeholder="Insira sua mensagem"
            id="textArea"
            onChange={(e) => setMenssagem(e.target.value)}
            value={menssagem}
          />
          <input className="submit-button" type="submit" value={"Enviar"} />
        </motion.form>
      </section>
    </main>
  );
}
