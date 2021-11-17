import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola, mi nombre es</h2>
          <h1 className="i-name">Jairo Sánchez</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Maquetador Web</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <p className="i-desc">
            Bienvenido/a, soy un chico joven al que le encanta el mundo de la Programación. Tengo experiencia tanto en Backend como en Frontend, aunque mis conocimientos son más amplios en Frontend. Asimismo, me gusta el diseño gráfico. 
            En esta página podrás obtener mis datos, así como observar algunos proyectos que he llevado a cabo. 
          </p>
        </div>  
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
