import { useState } from "react"
import RecipeCard from "../../components/recipeCard/RecipeCard"
import useFetch from "../../hooks/useFetch"
import Button from "../../components/button/Button"
import PageHeader from "../../components/pageHeader/PageHeader"
import useFetchById from "../../hooks/useFetchById"


const Recipes = () => {
  const { recipes, breakfast, lunch, dinner } = useFetch()

  const [filteredRecipes, setFilteredRecipes] = useState([...breakfast])
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = {
    All: recipes,
    Breakfast: breakfast,
    Lunch: lunch,
    Dinner: dinner
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setFilteredRecipes(filters[filter])
  }

  const recipesArray = filteredRecipes?.length > 0 ? filteredRecipes : recipes

  const recipe = useFetchById(9)

  return (
    <section>
      <PageHeader
        title='Opskrifter' 
        headerImg={recipe?.image}
      />

      <div className="filterButtons">
        <Button 
          title='Alle' 
          className={activeFilter === "All" ? "active" : ""} 
          onClick={() => handleFilterChange("All")} 
        />
        <Button 
          title='Morgenmad' 
          className={activeFilter === "Breakfast" ? "active" : ""} 
          onClick={() => handleFilterChange("Breakfast")}
        />
        <Button 
          title='Frokost' 
          className={activeFilter === "Lunch" ? "active" : ""} 
          onClick={() => handleFilterChange("Lunch")}
        />
        <Button 
          title='Aftensmad' 
          className={activeFilter === "Dinner" ? "active" : ""} 
          onClick={() => handleFilterChange("Dinner")}
        />
      </div>

      <div className="recipes">
        {recipesArray.map((recipe) => ( 
          <li key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </div>
    </section>
  )
}

export default Recipes