import './Pagination.scss'

/**
 * @param goToPreviousPage - The function to be called when the previous page button is clicked
 * @param goToNextPage - The function to be called when the next page button is clicked
 * @param hasPreviousPage - If true, the previous page button will be disabled
 * @param hasNextPage - If true, the next page button will be disabled
 * @param page - The current page
 * @param totPages - The total number of pages
 * @param onLimitChange - The function to be called when the limit is changed
 * @returns A pagination component
 * @example
 * <Pagination
 *   goToPreviousPage={() => console.log('Previous page')}
 *   goToNextPage={() => console.log('Next page')}
 *   hasPreviousPage={true}
 *   hasNextPage={false}
 *   page={0}
 *   totPages={10}
 *   onLimitChange={(limit) => console.log('Limit changed to', limit)}
 * />
 */
const Pagination = ({ goToPreviousPage, goToNextPage, hasPreviousPage, hasNextPage, page, totPages, onLimitChange }: PaginationProps) => {
    return <div className='pagination--cont'>
        <div className='pagination--cont-info'>
            <div>Current page: {page + 1} of {totPages}</div>
            <select onChange={(e) => { onLimitChange(parseInt(e.target.value)) }}>
                <option value={10}>10 elements</option>
                <option value={20}>20 elements</option>
                <option value={50}>50 elements</option>
            </select>
        </div>
        <div>
            <button onClick={goToPreviousPage} disabled={hasPreviousPage}>Previous Page</button>
            <button onClick={goToNextPage} disabled={hasNextPage}>Next Page</button>
        </div>
    </div>
};

export default Pagination;