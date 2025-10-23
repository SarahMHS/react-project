import style from "../assets/styles/content.module.scss";
import Skills from "../components/Skills";
import Banner from "../components/Banner"
import Summary from "../components/Summary"
function Content() {
    return (

        <>
            <Banner />
            <div className="flex-fill container justify-content-center ">
                <Summary />
                <Skills/>
            </div>
        </>
    )
}
export default Content;