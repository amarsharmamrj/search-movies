import styles from './CardSkeleton.module.css'

const CardSkeleton = ({ darkTheme }) => {

    return (
        <div className={`${styles.card} ${darkTheme ? styles.dark : styles.light}`}>
            <div className={`${styles.shimmer} ${styles.image}`}></div>
            <div className={`${styles.shimmer} ${styles.subtitle}`}></div>
            <div className={`${styles.shimmer} ${styles.subtitle}`}></div>
            <div className={`${styles.shimmer} ${styles.title}`}></div>
        </div>
    )
}

export default CardSkeleton