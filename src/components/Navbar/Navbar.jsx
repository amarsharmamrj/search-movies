import styles from './Navbar.module.css'

const Navbar = ({ setSearchKey, darkTheme, setDarkTheme }) => {

    const handleSearch = (e) => {
        const key = e.target.value
        setSearchKeyForAPi(key)
    }

    const handleApiCall = (key) => {
        setSearchKey(key)
    }

    const debounce = (fun, delay) => {
        let timer
        return function (key) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fun(key)
            }, delay)
        }
    }

    const setSearchKeyForAPi = debounce(handleApiCall, 500)

    const handleTheme = () => {
        console.log('dark mode')
        setDarkTheme((prev) => !prev)
    }

    return (
        <div className={`${styles.navbar} ${darkTheme ? styles.dark : styles.light}`}>

            {/* app title */}
            <div className={styles.appTitle}>
                <p>Movies</p>
            </div>

            {/* serach box */}
            <div className={styles.search}>
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder='Search for movies, series etc..'
                />
            </div>

            {/* theme button */}
            <div className={`${styles.themeButton} ${darkTheme ? styles.dark : styles.light}`}>
                <button
                    type="button"
                    onClick={handleTheme}>{darkTheme ? 'Light ' : 'Dark '}
                    Mode
                </button>
                <div className={`${styles.animate} ${darkTheme ? styles.dark : styles.light}`}></div>
            </div>

        </div>
    )
}

export default Navbar