import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Country = (props) => {
  if (props.country.length > 10) {
    return (
      <p>Too many results, specifcy another filter</p>
    )
  } else if (props.country.length === 1) {
    return (
      props.country.map(country => 
      <div key={country.name}> 
      <h2> {country.name} </h2>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2> languages </h2>
      <ul>
        {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img src={`https://restcountries.eu/data/${country.cioc.toLowerCase()}.svg`} alt={`Flag of ${country.name}`} width="200" heigth="300"></img>
      </div>
      )
    )

  } else {
      return (
        props.country.map(country => <p key={country.name}> {country.name} </p>)
      )
  }
}


function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      }
      )
  }, []) 

  const handleFilter = (e) => {
    setShowAll(false)
    setFilter(e.target.value)
  }

  const countriesToShow = showAll
  ? countries
  : countries.filter(countries=> countries.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <div>
        find countries: <input value={filter} onChange={handleFilter} />
      </div>
      <div>
        <Country country = {countriesToShow} />
      </div>
    </div>
  );
}

export default App;
