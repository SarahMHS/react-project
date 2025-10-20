import style from "../assets/styles/banner.module.scss"
import profile from "../assets/images/profile.png"

function Banner() {
    return (

        <div className={`${style.grid} align-center`}>
            <div className={`${style.greeting}`}>
                <h1>Hello</h1>
                <h2>I'm Sarah MAMISOA</h2>
                <p>Front-end developper</p>
                <button className="btn btn-primary">
                    <i className="fa-solid fa-cloud-arrow-down m-5">
                        </i>Download my CV</button>
            </div>
            <div>
                <img src={profile} alt="profile" />
            </div>
        </div>
    )
}

export default Banner;