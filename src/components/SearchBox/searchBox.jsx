import {searchContainer, searchInput} from './searchBox.module.css'

const SearchBox = ({value, onFilter}) => {
    return (
        <div className={searchContainer}>
            <p>Find contacts by name</p>
            <input
                className={searchInput}
                type="text"
                value={value}
                onChange={event => onFilter(event.target.value)} />
        </div>
    )
}

export default SearchBox;