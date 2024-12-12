import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Movies from "../components/Movies/Movies"

const MovieSearch = () => {
    const [searchKey, setSearchKey] = useState('')
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className="searchMovie">
 
            {/* navbar */}
            <Navbar
                setSearchKey={setSearchKey}
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
            />

            {/* movies */}
            <Movies
                searchKey={searchKey}
                darkTheme={darkTheme}
            />
        </div>
    )
}

export default MovieSearch