import "./about.css";
import Red from "../../img/linkedin.png";
import Redtwo from "../../img/github.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://scontent.fmad13-1.fna.fbcdn.net/v/t1.6435-9/72476146_472110370313297_8174957368711315456_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_ohc=ZZxGe-TGdJ0AX9jdZy3&_nc_oc=AQk_iOH4ZyPifQmmmkTW3QLM-Upbmg4rnaIVFASk94pqQJpTVGCEGuCExNkNn5Wpj4OSvlYzhe1n_QQ3ySxzJjGa&_nc_ht=scontent.fmad13-1.fna&oh=11ed296eed3dc1814a2b512eebc2c747&oe=61B9BA46"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mí</h1>
        <p className="a-sub">
          Soy un chico joven con muchas ganas de aprender y seguir desarrollándome como programado - desarrollador. 
          Me apasiona este mundo. También tengo como hobby la música, la fotografía y el cine.
        </p>
        <p className="a-desc">
          👨‍💻 Tengo conocimiento y experiencia en algunos de los siguientes lenguaje:
          <p className="a-desc">
          ➖ Java
          ➖ Angular
          ➖ React
          ➖ Riot
          ➖ Ionic
          ➖ ExpoGo
          ➖ PHP
          ➖ JavaScript
          ➖ TypeScript
          ➖ HTML5
          ➖ CSS
          ➖ XML
          ➖ SQL
          ➖ Git
          </p>
          ⚒️ He utilizado herramientas como Visual Studio, NotePad++, MongoDB, HeidisSQL, SmartGit, phpmyadmin, MySQL, Sourcetree, Jira.

          Experiencia en de crear webs, maquetar con Photoshop y otras herramientas.

        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Jairo Sánchez Frontend Developer 2021</h4>
            <div className="a-info-item">
              <a href="https://www.linkedin.com/in/jairo-sanchez-malaga/">
                <img src={Red} alt="Linkedin"  className="a-icon" />
              </a>
              <a href="https://github.com/jairosanchezb94">
                <img src={Redtwo} alt="Github"  className="a-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
