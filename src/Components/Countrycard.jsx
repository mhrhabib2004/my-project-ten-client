import { Link } from "react-router-dom";

const Countrycard = ({country}) => {
    
    
    return (
        
            <Link to={`/country/${country._id}`}>
                <div className="card h-96 w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src={country.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{country.country_Name}</h2>
                        <p>{country.short_description}</p>
                        
                    </div>
                </div>
                </Link>
        
    );
};

export default Countrycard;