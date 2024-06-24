import { useEffect, useState } from "react"

const useFetchById = (id) => {

    const [recipe, setRecipe] = useState()

    const fetchRecipeById = async (id) => {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data = await response.json()

        setRecipe(data)
    }

    useEffect(() => {
        fetchRecipeById(id)
    }, [id])

    return recipe
}

export default useFetchById