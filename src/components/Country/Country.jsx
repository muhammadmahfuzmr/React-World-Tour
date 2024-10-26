import { useState } from "react";
import "../Country/Country.css";
const Country = ({ country , handleVisitedCountries , handleVisitedFlags}) => {
  const [visited, setVisited] = useState(false);
 
  const { name, flags, area, population } = country;
  function handleClick() {
  
    setVisited(!visited);
  
  }
  return (
    <div className={`country-box ${visited && 'visited'}`}>
      <h4>Name: {name.official}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population} </p>
      <p>Area: {area}</p>
     <button onClick={()=> handleVisitedCountries(country)}>Mark As Visited</button>
     <button onClick={()=> handleVisitedFlags(country.flags)}>Add Flags</button>
      <button onClick={handleClick }>{visited? 'visited': 'want to go'}</button>
    </div>
  );
};

export default Country;
