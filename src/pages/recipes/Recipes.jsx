import { useState } from "react"
import RecipeCard from "../../components/recipeCard/RecipeCard"
import useFetch from "../../hooks/useFetch"
import Button from "../../components/button/Button"
import PageHeader from "../../components/pageHeader/PageHeader"
import useFetchById from "../../hooks/useFetchById"
import Loader from "../../components/loader/Loader"


const Recipes = () => {
  const { recipes, breakfast, lunch, dinner, error, isLoading } = useFetch()

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
    <>
    {isLoading ? ( // Hvis isLoading er true(hvis den er igang med at hente data), så skal loader komponent vises
      <Loader />
    ) : ( // Hvis den er false, så skal den vise vores side med vores data
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

      {/* Hvis den ikke kan hente siden, så skal der vises en fejlbesked */}
      {error && <p>Kunne ikke hente opskrifterne. Fejl: {error}</p>}


      <div className="recipes">
        {recipesArray.map((recipe) => ( 
           <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
           </li>
        ))}
      </div>
      </section>
    )}
    </>
  )
}

export default Recipes