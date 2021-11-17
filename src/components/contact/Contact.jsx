import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xsgn0ed",
        "template_b5v9a3a",
        formRef.current,
        "user_BKlgbUIsPhoSurhyvv6Y0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contáctame si estás interesado/a en mí</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
                +34 625 252 15 17
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
                jairosanchezb5@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
                Rincón de la Victoria, Málaga, España.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Estás interesado en contactarme?</b> En el siguiente
            formulario lo podrás hacer.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Apellidos" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensaje" name="message" />
            <button>Enviar</button>
            {done && "Gracias"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
