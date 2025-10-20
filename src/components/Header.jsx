import style from "../assets/styles/header.module.scss"

function Header() {
    return (
        <div className={`${style.header} d-flex flex-row align-center`}>

            <i className="fa-solid fa-bars"> </i>
            <div className="flex-fill">
                <img src="" alt="logo" />
            </div>
            <ul>
                <button className="btn btn-primary"><i className="fa-solid fa-basket-shopping"></i>panier</button>
            </ul>


        </div>
    )
}
export default Header;