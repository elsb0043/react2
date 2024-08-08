import { useEffect, useState } from "react"

const useFetch = () => {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  // Kald funktionen for at hente opskrifter, fx når komponenten mounts
  useEffect(() => {
    fetchRecipes()
  }, [])


  const fetchRecipes = async () => {
    setError(null) // Hvis den fanger en fejl så nulstiller den
    setIsLoading(true) // Loaderen går i gang

    try { // Prøver at hente/fetche vores data
        const response = await fetch("https://dummyjson.com/recipes")
        const data = await response.json()
        setRecipes(data.recipes)

    } catch (error) { // Hvis den fanger en fejl, så skal den udsende en fejlbesked ude i konsollen
        setError(error.message)
        console.error("Error fetching recipes:", error)

    } finally { // Hvis det lykkedes at hente data, så fjernes loaderen
        setIsLoading(false)
    }
  }

  let rating = recipes.filter((recipe) => recipe.rating > 4.8)

  let breakfast = recipes.filter((recipe) => 
    recipe.mealType.includes("Breakfast"))

  let lunch = recipes.filter((recipe) => 
    recipe.mealType.includes("Lunch"))

  let dinner = recipes.filter((recipe) => 
    recipe.mealType.includes("Dinner"))


  useEffect(() => {
    fetchRecipes()
  }, [])


  return { recipes, rating, breakfast, lunch, dinner, error, isLoading }

}

export default useFetch