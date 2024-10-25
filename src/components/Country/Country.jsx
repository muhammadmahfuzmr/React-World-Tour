import "../Country/Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, area, population } = country;
  return (
    <div className="country-box">
      <h4>Name: {name.official}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population} </p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
