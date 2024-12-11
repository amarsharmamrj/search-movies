import { useState } from "react"
import Movies from "../Movies/Movies"
import Navbar from "../Navbar/Navbar"

const SearchMovie = () => {
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

export default SearchMovie