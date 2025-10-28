import style from "../assets/styles/skills.module.scss"

function Skills() {
    return (

        <div className="d-flex flex-column align-center">
            <p>Compétenses</p>
            <h3>Qu'est ce que je peux faire pour vous ?</h3>

            <div className={`${style.skills} my-20`}>
                
                    <i className="fa-brands fa-html5" />
                    <i className="fa-brands fa-css3-alt" />
                    <i className="fa-brands fa-square-js" />
                    <i className="fa-brands fa-react" />
                    <i className="fa-brands fa-sass" />
                    <i className="fa-brands fa-wordpress-simple" />

            </div>

            <div className={`${style.todo} my-20`}>

                <div className={`${style.skill} p-10`}>

                    <ul>

                        <li> J’intègre des maquettes en code propre et optimisé avec HTML, CSS.</li>

                        <li>Je crée des sites web modernes et responsives(ordinateur, tablette, mobile).</li>

                        <li>je developpe les animations sur l'interface avec JavaScript</li>

                    </ul>

                </div>
                <div className={`${style.skill} p-10`}>

                    <ul>
                        <li>Je construis des applications dynamiques avec ReactJs.</li>

                        <li>J’utilise des composants réutilisables pour rendre le code plus efficace.</li>

                        <li> Je mets en forme les pages avec SCSS pour un design professionnel.</li>
                    </ul>

                </div>
                <div className={`${style.skill} p-10`}>
                    <ul>
                        <li>Je crée et personnalise des sites avec WordPress.</li>

                        <li>J’installe des thèmes et plugins selon les besoins du projet.</li>

                        <li>  J’optimise les pages pour un bon référencement (SEO).</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}
export default Skills;