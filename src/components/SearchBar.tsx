import { ChangeEvent } from 'react';
import searchIcon from '../assets/search.svg';
import "../styles/SearchBar.css";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };
    
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input h3"
                placeholder="Pesquisar"
                onChange={handleInputChange}
            />
            <img src={searchIcon} alt="Ícone de pesquisa" />
        </div>
    );
}

export default SearchBar;
