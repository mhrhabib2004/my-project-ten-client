import { Link, useLoaderData, useParams } from "react-router-dom";

const VIewditels = () => {
    const addspot = useLoaderData();
    console.log('spot data here', addspot)

    const { id } = useParams(addspot);
    // const dataInt = parseInt(id);
    // console.log(dataInt)
    console.log(id);
    const Spot = addspot.find((Spots) => Spots._id === id);
    console.log('spot here', Spot)
    const { photo, spot, country, location, description, average, seasonality, time, totalVisitorsPerYear, email, name } = Spot;
    return (
        <div style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/282/910/small/elegant-white-background-free-vector.jpg)' }} className="card lg:card-side min-h-screen bg-no-repeat bg-cover bg-center bg-base-200">
            <div className="card-body  flex-col lg:flex-row">
                <img src={photo} className="lg:w-auto md:h-96   rounded-lg shadow-2xl" />
                <div className="lg:ml-5 bg-zinc-300 p-4 w-full">
                    <h1 className="text-lg font-bold">Spot name : <span className="text-lg text-green-500"> {spot}</span> </h1>
                    <p className="text-sm py-4 font-bold">Short description : <span className="text-sm text-green-500">{description}</span></p>
                    <p className="text-lg py-2 font-bold">Country Name : <span className="text-lg  text-green-500">{country}</span></p>
                    <p className="text-lg py-2 font-bold">location : <span className="text-lg text-green-500">{location}</span></p>
                    <p className="text-lg py-2 font-bold">Seasonality  : <span className="text-lg text-green-500">{seasonality}</span></p>
                    <p className="text-lg py-2 font-bold"> Travel time  : <span className="text-lg text-green-500">{time}</span></p>
                    <p className="text-lg py-2 font-bold"> TotalVisitorsPerYear : <span className="text-lg text-green-500">{totalVisitorsPerYear}</span></p>
                    <p className="text-lg py-2 font-bold">  Average cost : <span className="text-lg text-green-500">{average}</span></p>
                    <p className="text-lg py-2 font-bold">  User Name: <span className="text-lg text-green-500">{name}</span></p>
                    <p className="text-lg py-2 font-bold">User Email: <span className="text-lg text-green-500">{email}</span></p>

                    <Link to={"/AllTouristsSpot"}><button  className="btn btn-outline btn-success">Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default VIewditels;