import { useState } from 'react';
import SearchBox from './Components/body/searchBar/searchbar';
import './App.css';
import SearchResults from './Components/body/searchResults/searchResults';

const App = () => {
    const [searchBoxData, setSearch] = useState('')
    const [company, setCompany] = useState("")

    return (
        <div>
            <SearchBox searchCompany={searchBoxData} setSearch={setSearch} setCompany={setCompany} />
            <SearchResults company={company} />
        </div>
    )
}

export default App;
