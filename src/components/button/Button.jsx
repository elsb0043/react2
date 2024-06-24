import styles from "./button.module.css"

const Button = ({ title, className, onClick }) => {

    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button