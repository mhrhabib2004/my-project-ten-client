import { Link } from "react-router-dom";


const Spotcardhome = ({ addspot }) => {
    // console.log('spot here', addspot)
    const{photo,spot,country,location,description,average,seasonality,time,totalVisitorsPerYear,email,name}=addspot;

    console.log('data from spot ',addspot)
    return (
        <div className="">
            <div className="card flex flex-col md:flex-row  md:h-72 card-side bg-base-100 shadow-xl">
                <figure><img className="w-52 ml-3 h-52 rounded-xl" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">spot_name : {spot}</h2>
                    <p className="text-xl font-bold">average_cost : {average}</p>
                    <p className="text-xl font-bold">totaVisitorsPerYear : {totalVisitorsPerYear}</p>
                    <p className="text-xl font-bold"> travel_time : {time}</p>
                    <p className="text-xl font-bold">seasonality : {seasonality}</p>
                    <Link to={`/viewdata/${addspot._id}`}><button className="btn w-full btn-outline btn-warning">View Details</button></Link>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Spotcardhome;