import { useParams } from "react-router-dom"
import useFetchById from "../../hooks/useFetchById"
import PageHeader from "../../components/pageHeader/PageHeader"

const RecipeDetail = () => {
  const { id } = useParams()
  const recipe = useFetchById(id)

  return (
    <div>
      <PageHeader 
        title={recipe?.name}
        headerImg={recipe?.image}
      />
    </div>
  )
}

export default RecipeDetail