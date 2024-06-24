import styles from './sectionHeader.module.css'

const SectionHeader = ({ title }) => {

    return (
      <header className={styles.sectionHeader}>
            <h1>{title}</h1>
      </header>
    )
}

export default SectionHeader