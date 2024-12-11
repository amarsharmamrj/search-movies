import styles from './MoviesCard.module.css'

const MoviesCard = ({ movie, darkTheme }) => {
    const { Title, Poster, Year, Type } = movie

    return (
        <div className={`${styles.card} ${darkTheme ? styles.dark : styles.light}`}>
            <img src={Poster} alt={Title} />
            <h4>Year: <b>{Year}</b></h4>
            <h5>Category: <b>{Type}</b></h5>
            <h2>{Title}</h2>
        </div>
    )
}

export default MoviesCard