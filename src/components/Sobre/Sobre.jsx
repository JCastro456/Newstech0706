import menbox from "../../assets/menbox.png";
import "./sobre.css";

export const Sobre = () => {
  return (
    <section className="Sobre-container">
      <div className="Sobre-box">
        <h1 className="Sobre-title">Sobre</h1>
        <p className="Sobre-paragrafo-1">
          Na Newstech oferecemos serviços especializados de desenvolvimento de
          websites voltados para empreendedores. Sabemos o quão crucial é ter
          uma presença online impactante nos dias de hoje, e estamos aqui para
          ajudar você a alcançar seus objetivos.
        </p>
        <p className="Sobre-paragrafo-2">
          Pensamos fora da caixa, nossa equipe de talentosos desenvolvedores
          está pronta para criar websites sob medida, que reflitam a essência do
          seu negócio e atendam às suas necessidades específicas. Combinamos
          design atraente, funcionalidades avançadas e usabilidade intuitiva
          para entregar uma experiência online excepcional para seus clientes.
        </p>
      </div>
      <div className="Sobre-box_imagem">
        <img className="responsive-image"src={menbox} alt="Homem em uma caixa" />
        </div>
    </section>
  );
};
