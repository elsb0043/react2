import useFetch from "../../hooks/useFetch"
import RecipeCard from "../recipeCard/RecipeCard"


const Favorites = () => {
    const { rating } = useFetch()

    return (
        <section className="recipes">
            {rating.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </section>
    )
}

export default Favorites