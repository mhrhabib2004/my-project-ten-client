
import { Link } from "react-router-dom";

const Spotcard = ({addsopt}) => {

   

    const {photo,spot,average,seasonality,time,totalVisitorsPerYear}=addsopt;
    return (
        <div className="">
            <div className="card flex flex-col md:flex-row  md:h-72 md:auto card-side bg-base-100 shadow-xl">
                <figure><img className="w-52 ml-3 h-52  rounded-xl" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">spot_name :{spot}</h2>
                    <p>average_cost : {average}</p>
                    <p>totaVisitorsPerYear : {totalVisitorsPerYear}</p>
                    <p> travel_time : {time}</p>
                    <p>seasonality : {seasonality}</p>
                    
                    <Link to={`/allspotview/${addsopt._id}`}><button className="btn w-full btn-outline btn-warning">View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Spotcard;