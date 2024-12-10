import './NavigationBar.scss'

/**
 * @param goToPreviousPage - The function to be called when the previous page button is clicked
 * @returns A navigation bar component
 * @example
 * <NavigationBar goToPreviousPage={() => console.log('Previous page')} />
 */
const NavigationBar = ({ goToPreviousPage }: NavigationBarProps) => {
    return <div className='navigation-bar--cont'>
        <button onClick={goToPreviousPage}>Back</button>
    </div>
}

export default NavigationBar;