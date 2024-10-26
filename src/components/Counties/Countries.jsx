import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import '../Counties/Countries.css'
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])
 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountries = (country)=>{
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        {
          visitedCountries.map(country=> <li key={country.cca3}>Name: {country.name.common}</li>)
        }
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
