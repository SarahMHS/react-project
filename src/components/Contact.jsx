import style from "../assets/styles/contact.module.scss"
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Contact() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className={`${style.contact} d-flex flex-column align-center`}>
            <p>Contact</p>
            <h3>{texts.contact}</h3>
            <div className="my-20">
                <a href="https://www.linkedin.com/in/sarah-mamisoaniaina-894762234/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/SarahMHS"><i className="fa-brands fa-github"></i></a>
                <a href="tel:+261345031647"><i className="fa-brands fa-whatsapp"></i></a>
            </div >
        </div >
    );

}
export default Contact;