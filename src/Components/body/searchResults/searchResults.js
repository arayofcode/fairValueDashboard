import { useEffect, useState } from "react";
import data from "../../DB/companyDB.json"
import './searchResults.css'


const SearchResults = ({ company }) => {
  const [results, setResults] = useState([])
  useEffect(() => {
    if (company === "") {
      setResults([])
    }
    else{
      setResults(data[company])
    }
  }, [company]);

  return (
    <div>{JSON.stringify(results)}</div>
  )
}

export default SearchResults