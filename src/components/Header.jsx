import style from "../assets/styles/header.module.scss"

function Header() {
    return (
        <div className={`${style.header} d-flex flex-row align-center`}>

            <i className="fa-solid fa-bars"> </i>
            
            <ul>
                <button className="btn btn-primary"><i className="fa-solid fa-"></i>Français</button>
                <button className="btn btn-primary"><i className="fa-solid fa-"></i>Anglais</button>
            </ul>


        </div>
    )
}
export default Header;