import Skills from "../components/Skills";
import Banner from "../components/Banner";
import Summary from "../components/Summary";
import Contact from "../components/Contact";
function Content() {
    return (

        <>
            <Banner />
            <div className="flex-fill container justify-content-center ">
                <Summary />
                <Skills/>
                <Contact/>
            </div>
        </>
    )
}
export default Content;