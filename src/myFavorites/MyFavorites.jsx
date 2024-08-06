import { useLocalStorage } from "@uidotdev/usehooks"
import useFetch from "../hooks/useFetch"
import RecipeCard from "../components/recipeCard/RecipeCard"

const MyFavorites = () => {

    const {recipes} = useFetch()
    const [favorites] = useLocalStorage("Favorites", [])

    const favoritesRecipes = recipes.filter((recipe) =>
        favorites.includes(recipe.id))


    return (
        <section className="recipes">
            {favoritesRecipes?.map((recipe) => (
                <RecipeCard isFavorite={true} key={recipe.id} recipe={recipe} />
            ))}
        </section>
    )
}

export default MyFavorites