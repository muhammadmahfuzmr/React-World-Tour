import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import '../Counties/Countries.css'
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([])
 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountries = (country)=>{
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlags = (flag)=>{
   const newVisitedFlags = [...visitedFlags, flag]
   setVisitedFlags(newVisitedFlags)
  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        {
          visitedCountries.map(country=> <li key={country.cca3}>Name: {country.name.common}</li>)
        }
      </div>
      <div className="flags-container">
        <h1>Visited Flags:</h1>
        {
          visitedFlags.map((flag, idx)=> <img key={idx} src={flag.png}></img>)
        }
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3} handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
