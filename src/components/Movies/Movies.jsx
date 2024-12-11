import { useEffect, useState } from "react"
import MoviesCard from "../MovieCard/MoviesCard"

// style
import styles from './Movies.module.css'
import Pagination from "../Pagination/Pagination"
import CardSkeleton from "../CardSkeleton/CardSkeleton"

const data = {
    Search: [
        {
            Title: "Thor",
            Year: "2011",
            imdbID: "tt0800369",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            Title: "Thor: Ragnarok",
            Year: "2017",
            imdbID: "tt3501632",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
        },
        {
            Title: "Thor: The Dark World",
            Year: "2013",
            imdbID: "tt1981115",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
        },
        {
            Title: "Thor: Love and Thunder",
            Year: "2022",
            imdbID: "tt10648342",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            Title: "Team Thor",
            Year: "2016",
            imdbD: "tt6016776",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            Title: "Thor: Tales of Asgard",
            Year: "2011",
            imdbID: "tt1667903",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg"
        },
        {
            Title: "Team Thor: Part 2",
            Year: "2017",
            imdbID: "tt6599818",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            Title: "Valhalla: The Legend of Thor",
            Year: "2019",
            imdbID: "tt8956872",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMzI1YmQ1YzEtNDM0NS00OWZiLTgyMTYtNGZmNmNmODAyNmJhXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            Title: "Almighty Thor",
            Year: "2011",
            imdbID: "tt1792794",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg"
        },
        {
            Title: "Thor: Finding Korg",
            Year: "2018",
            imdbID: "tt8513006",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg"
        }
    ],
    totalResults: "96",
    Response: "True"
}

const Movies = ({ searchKey, darkTheme }) => {
    const [moviesList, setMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // states for pagination
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResults] = useState(0)
    const [hasMorePage, setHasMorePage] = useState(false)

    const getMoviesData = () => {
        setIsLoading(true)
        const url = `https://www.omdbapi.com/?apikey=73753d5b&s=${searchKey}&page=${page}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false)
                setMoviesList(data.Search)

                setTotalResults(data.totalResults)

                console.log('api data:', data)
            })
            .catch((error) => {
                console.log('api data error: ', error)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        if (searchKey != '') {
            setPage(1)
            getMoviesData()
        }
    }, [searchKey])

    useEffect(() => {
        if (searchKey != '') {
            getMoviesData()
        }
    }, [page])

    if (isLoading) {
        return (
            <div className={`${styles.movies} ${darkTheme ? styles.dark : styles.light}`}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => <CardSkeleton key={index + 'card'} darkTheme={darkTheme} />)}
            </div>
        )
    }

    return (
        <div className={`${styles.movies} ${darkTheme ? styles.dark : styles.light}`}>
            {
                moviesList?.length > 0 ? (
                    moviesList.map((movie) => (
                        <MoviesCard
                            key={movie.imdbID}
                            movie={movie}
                            darkTheme={darkTheme}
                        />
                    ))
                ) : (
                    <div className={styles.fullHeight}>
                        <h2>No movies to show, try searching!</h2>
                    </div>
                )
            }

            {
                moviesList?.length > 0 && (
                    <Pagination
                        page={page}
                        setPage={setPage}
                        totalResult={totalResult}
                        hasMorePage={hasMorePage}
                        setHasMorePage={setHasMorePage}
                        darkTheme={darkTheme}
                    />
                )
            }

        </div>
    )
}

export default Movies