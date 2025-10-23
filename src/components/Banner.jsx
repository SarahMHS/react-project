import style from "../assets/styles/banner.module.scss"
import profile from "../assets/images/profile.png"

function Banner() {
    return (

        <div className={`${style.grid} align-center`}>
            <div className={`${style.greeting}`}>
                <h1>SALUT</h1>
                <h2>Je suis Sarah MAMISOA</h2>
                <p>Développeuse Front-end </p>
                <button className="btn btn-primary">
                    <i className="fa-solid fa-cloud-arrow-down m-5">
                    </i>Télécharger mon CV</button>
            </div>
            <div>
                <img src={profile} alt="profile" />
            </div>
        </div>
    )
}

export default Banner;