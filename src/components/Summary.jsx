import profile from "../assets/images/profile.png"
import style from "../assets/styles/summary.module.scss"

function Summary() {
    return (
        <div className="d-flex flex-column align-center">
            <p>Biographie</p>
            <h3>Qui suis-je?</h3>
            <div className={`${style.grid} my-20 align-center`}>
                <div>
                    <img src={profile} alt="profile" width={250} />
                </div>
                <div>
                    <p>Je suis une développeuse front-end passionnée par la création de sites web modernes, clairs et responsives. 
                        Avec plus de 4 ans d'expérience, j’aime transformer des idées en interfaces élégantes.
                         Mon objectif est de concevoir des expériences utilisateur à la fois esthétiques et performantes.</p>
                </div>

            </div>
        </div>
    )
}
export default Summary;