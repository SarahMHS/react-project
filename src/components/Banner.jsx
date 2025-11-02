import style from "../assets/styles/banner.module.scss"
import profile from "../assets/images/profile.png"
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Banner = () => {
    const { texts } = useContext(LanguageContext);
    return (

        <div className={`${style.grid} align-center`}>
            <div className={`${style.greeting} m-5`}>
                <h1>{texts.title}</h1>

                <h2>{texts.title2} Sarah MAMISOA</h2>
                <p>{texts.description}</p>
                <a href="/files/cv.pdf" download>
                    <button className="btn btn-primary">
                        <i className="fa-solid fa-cloud-arrow-down m-5" />
                        {texts.button}
                    </button>
                </a>
            </div>
            <div>
                <img src={profile} alt="profile" />
            </div>
        </div>
    )
}

export default Banner;