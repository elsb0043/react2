import { useEffect, useState } from "react"

const useFetch = () => {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchRecipes = async () => {
    setError(null)
    setIsLoading(true)

    try {
        const response = await fetch("https://dummyjson.com/recipes")
        const data = await response.json()
        setRecipes(data.recipes)

    } catch (error) {
        setError(error.message)
        console.error("Error fetching recipes:", error)

    } finally {
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