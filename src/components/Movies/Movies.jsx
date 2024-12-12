import { useEffect, useState } from "react"
import MoviesCard from "../MovieCard/MoviesCard"

// style
import styles from './Movies.module.css'
import Pagination from "../Pagination/Pagination"
import CardSkeleton from "../CardSkeleton/CardSkeleton"

const Movies = ({ searchKey, darkTheme }) => {
    const [moviesList, setMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // states for pagination
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResults] = useState(0)

    // get list of movies from api
    const getMoviesData = () => {
        setIsLoading(true)
        const url = `https://www.omdbapi.com/?apikey=b6e23bc0&s=${searchKey}&page=${page}`
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

    // call the function to get movies list when searchKey changes
    useEffect(() => {
        if (searchKey != '') {
            setPage(1)
            getMoviesData()
        }
    }, [searchKey])

    // call the function to get movies list when page changes
    useEffect(() => {
        if (searchKey != '') {
            getMoviesData()
        }
    }, [page])

    // return shimmer component when data is is loading
    if (isLoading) {
        return (
            <div className={`${styles.movies} ${darkTheme ? styles.dark : styles.light}`}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => <CardSkeleton key={index + 'card'} darkTheme={darkTheme} />)}
            </div>
        )
    }

    return (
        <div className={`${styles.movies} ${darkTheme ? styles.dark : styles.light}`}>

            {/* render movie card when there is data */}
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

            {/* component to manage pagination */}
            {
                moviesList?.length > 0 && (
                    <Pagination
                        page={page}
                        setPage={setPage}
                        totalResult={totalResult}
                        darkTheme={darkTheme}
                    />
                )
            }

        </div>
    )
}

export default Movies
