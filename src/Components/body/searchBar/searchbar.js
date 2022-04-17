import './searchbar.css'

const SearchBox = ({ searchCompany, setSearch, setCompany }) => {
  // Handle changes in search box
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch("")

    let companyName = event.target[0].value
    setCompany(companyName.toUpperCase())
  }

  return (
    <form className='searchForm' data-action='submit' onSubmit={handleSubmit}>
      <label>
        <input id="searchBox" value={searchCompany} onChange={handleSearchChange} autoFocus placeholder="Enter Company Symbol" />
      </label>
    </form>
  )
}

export default SearchBox