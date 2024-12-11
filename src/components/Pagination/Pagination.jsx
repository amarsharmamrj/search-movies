import styles from './Pagination.module.css'

const Pagination = ({ page, setPage, setHasMorePage, totalResult, darkTheme }) => {

    const handlePrev = () => {
        if (page >= 2) {
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        if (totalResult > page * 10) {
            setPage(page + 1)
            setHasMorePage(true)
        } else {
            setHasMorePage(false)
        }
    }

    return (
        <div className={`${styles.pagination} ${darkTheme ? styles.dark : styles.light}`}>
            <div className={styles.paginationInner}>
                {/* prev button */}
                <button
                    type='button'
                    onClick={handlePrev}
                    disabled={page == 1 ? true : false}
                    className={page == 1 ? styles.disabled : styles.enabled}
                >
                    Prev
                </button>

                {/* page data */}
                <p>Showing page <b>{page}</b> of <b>{Math.floor(totalResult / 10)}</b></p>

                {/* next button */}
                <button
                    type='button'
                    onClick={handleNext}
                    disabled={(totalResult > page * 10) ? false :  true}
                    className={(totalResult > page * 10) ? styles.enabled :  styles.disabled}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination