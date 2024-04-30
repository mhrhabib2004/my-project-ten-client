import { Link } from "react-router-dom";


const Spotcardhome = ({ addspot }) => {
    // console.log('spot here', addspot)
    const{photo,spot,average,seasonality,time,totalVisitorsPerYear,}=addspot;

    console.log('data from spot ',addspot)
    return (
        <div className="">
            <div className="card flex flex-col md:flex-row  md:h-72 card-side bg-base-100 shadow-xl">
                <figure><img className="w-52 ml-3 h-52 rounded-xl" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Spot name : {spot}</h2>
                    <p className="text-xl font-bold">Average_cost : {average}</p>
                    <p className="text-xl font-bold">Total Visitors PerYear : {totalVisitorsPerYear}</p>
                    <p className="text-xl font-bold"> Travel_time : {time}</p>
                    <p className="text-xl font-bold">Seasonality : {seasonality}</p>
                    <Link to={`/viewdata/${addspot._id}`}><button className="btn w-full btn-outline btn-warning">View Details</button></Link>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Spotcardhome;