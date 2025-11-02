import profile from "../assets/images/profile.png"
import style from "../assets/styles/summary.module.scss"

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Summary() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="d-flex flex-column align-center">

            <p>{texts.biotitle}</p>
            <h3>{texts.biotitle2}</h3>
            <div className={`${style.grid} my-20 align-center`}>
                <div>
                    <img src={profile} alt="profile" width={250} />
                </div>
                <div className="p-20">
                    <p>
                        {texts.bio}
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Summary;