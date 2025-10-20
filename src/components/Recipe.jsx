import style from "../assets/styles/recipe.module.scss"
import recipe from "../assets/images/sandwich.png"
function Recipe(){

    return(
        <div className={style.recipe}>
            <div className={style.imageContainer}>
                <img src={recipe} alt="recipe" />
            </div>
            <div className={style.title}>
                <h3>Salade</h3>

            </div>
        </div>
    )

}
export default Recipe;