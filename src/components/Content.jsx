import style from "../assets/styles/content.module.scss";
import Recipe from "../components/Recipe";
import Banner from "../components/Banner"
import Summary from "../components/Summary"
function Content() {
    return (

        <>
            <Banner/>
            <div className="flex-fill container justify-content-center ">
                {/* <div className="card p-20">
                <div className={`${style.grid}`}>
                    <Recipe />
                </div>
            </div> */}

            <Summary/>

            </div>
        </>
    )
}
export default Content;