import searchIcon from '../assets/search.svg';
import "../styles/SearchBar.css";

function SearchBar() {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Pesquisar"
            />
            <img src={searchIcon} alt="Ícone de pesquisa" />
        </div>
    );
}

export default SearchBar;
