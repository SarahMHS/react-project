import style from "../assets/styles/skills.module.scss"
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Skills() {
    const { texts } = useContext(LanguageContext);

    return (

        <div className="d-flex flex-column align-center">
            <p>{texts.skillstitle}</p>
            <h3>{texts.skillstitle2}</h3>

            <div className={`${style.skills} my-20`}>

                <i className="fa-brands fa-html5" />
                <i className="fa-brands fa-css3-alt" />
                <i className="fa-brands fa-square-js" />
                <i className="fa-brands fa-react" />
                <i className="fa-brands fa-sass" />
                <i className="fa-brands fa-wordpress-simple" />

            </div>

            <div className={`${style.todo} my-20`}>

                <div className={`${style.skill} p-10`}>

                    <ul>

                        <li> {texts.skillsHtml.p1}</li>

                        <li> {texts.skillsHtml.p2}</li>
                        <li> {texts.skillsHtml.p3}</li>

                    </ul>

                </div>
                <div className={`${style.skill} p-10`}>

                    <ul>
                        <li> {texts.skillsReact.p1}</li>
                        <li> {texts.skillsReact.p2}</li>
                        <li> {texts.skillsReact.p3}</li>
                    </ul>

                </div>
                <div className={`${style.skill} p-10`}>
                    <ul>
                        <li> {texts.skillsWp.p1}</li>
                        <li> {texts.skillsWp.p2}</li>
                        <li> {texts.skillsWp.p3}</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}
export default Skills;