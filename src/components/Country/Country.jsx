
import '../Country/Country.css'
const Country = ({country}) => {
    const {name , flags}=country
    return (
        <div className="country-box">
            <h4>Name: {name.official}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;