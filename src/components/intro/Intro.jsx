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
            Buenas soy un chico joven que le encanta codeguear y el mundo de la programación como Programador Frontend, con algo de experiencia en el Backend. También me gusta el diseño gráfico como UI/UX. 
            En esta página podrás ver detalles de mis datos y mis proyectos junto a la experiencia. 
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
