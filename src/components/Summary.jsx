import profile from "../assets/images/profile.png"
import style from "../assets/styles/summary.module.scss"

function Summary() {
    return (
        <div className="d-flex flex-column align-center">
            <p>Biography</p>
            <h3>Who am I</h3>
            <div className={`${style.grid} my-5`}>
              

                    <div>
                        <img src={profile} alt="profile" width={250} />
                    </div>

                    <div>
                        <h4>About me</h4>
                        <p>salut salut salut salut salut salut salut salut salut salut salut 
                            salut salut salut salut salut salut salut salut salut salut 
                            salut salut salut salut salut salut salut salut salut salut salut
                            salut salut salut salut salut salut salut salut 
                            salut salut salut salut salut salut salut salut 
                            salut salut salut salut salut salut salut salut</p>
                    </div>
              
            </div>
        </div>
    )
}
export default Summary;