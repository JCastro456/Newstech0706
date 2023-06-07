import "./Projetos.css"
import card from "../../assets/card.png"



const Projetos = () => {
  return (
    <section className="Projeto-container">
         <h1 className="Projeto-title">Projetos</h1>
         <p className="Projeto-paragraph">Descubra como nosso projetos digitais podem ajudá-lo a alcançar seus objetivo de negócios online.</p>
         <div className="Projeto-row">
           <div className="Projeto-col">
            <div className="Projeto-card">
              <img className="Projeto-card_imagem" src={card} alt="Imagem do computador" />
              <h2 className="Projeto-card_title">Nome do Site / Projeto</h2>
              <p className="Projeto-card_paragraph">Visite a página</p>
            </div>
           </div>
           <div className="Projeto-col">
            <div className="Projeto-card">
              <img className="Projeto-card_imagem" src={card} alt="Imagem do computador" />
              <h2 className="Projeto-card_title">Nome do Site / Projeto</h2>
              <p className="Projeto-card_paragraph">Visite a página</p>
            </div>
           </div>
            <div className="Projeto-col">
             <div className="Projeto-card">
               <img className="Projeto-card_imagem" src={card} alt="Imagem do computador" />
              <h2 className="Projeto-card_title">Nome do Site / Projeto</h2>
              <p className="Projeto-card_paragraph">Visite a página</p>
            </div>
           </div>
          <div className="Projeto-col">
           <div className="Projeto-card">
             <img className="Projeto-card_imagem" src={card} alt="Imagem do computador" />
            <h2 className="Projeto-card_title">Nome do Site / Projeto</h2>
            <p className="Projeto-card_paragraph">Visite a página</p>
           </div>
          </div>
        <div className="Projeto-col">
          <div className="Projeto-card">
            <img className="Projeto-card_imagem" src={card} alt="Imagem do computador" />
            <h2 className="Projeto-card_itle">Nome do Site / Projeto</h2>
            <p className="Projeto-card_paragraph">Visite a página</p>
          </div>
        </div>
        <div className="Projeto-col">
          <div className="Projeto-card">
            <img className="Projeto-card_imagem" src={card} alt="Imagem do computador" />
            <h2 className="Projeto-card_title">Nome do Site / Projeto</h2>
            <p className="Projeto-card_paragraph">Visite a página</p>
           </div>
        </div>
       </div>
    </section>
  )
}

export default Projetos