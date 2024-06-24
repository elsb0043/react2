import PageHeader from "../components/pageHeader/PageHeader"
import useFetchById from "../hooks/useFetchById"

const About = () => {
    const recipe = useFetchById(7)

    return (
      <section>
        <PageHeader
          title='Om'
          headerImg={recipe?.image}
        />
      </section>
    )
}

export default About