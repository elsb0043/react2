import useFetchById from "../hooks/useFetchById"
import PageHeader from "../components/pageHeader/PageHeader"

const Contact = () => {
    const recipe = useFetchById(3)

    return (
      <section>
        <PageHeader
          title='Kontakt'
          headerImg={recipe?.image}
        />
      </section>
    )
}

export default Contact