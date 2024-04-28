import { Link, useLoaderData, useParams } from "react-router-dom";

const Allsoptview = () => {
    const alldataview = useLoaderData();
    // console.log('all data here',alldataview)
    const { id } = useParams(alldataview);
    // console.log('id here', id);
    const Spot = alldataview.find((Spots) => Spots._id === id);
    const { photo, spot, country, location, description, average, seasonality, time, totalVisitorsPerYear, email, name } = Spot;
    return (
        <div style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/282/910/small/elegant-white-background-free-vector.jpg)' }} className="hero min-h-screen bg-no-repeat bg-cover bg-center bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div className="">
                    <h1 className="text-3xl font-bold">Spot name : <span className="text-4xl text-green-500"> {spot}</span> </h1>
                    <p className="text-2xl py-4 font-bold">Short description : <span className="text-xl font- text-green-500">{description}</span></p>
                    <p className="text-2xl py-2 font-bold">Country Name : <span className="text-2xl  text-green-500">{country}</span></p>
                    <p className="text-2xl py-2 font-bold">location : <span className="text-2xl text-green-500">{location}</span></p>
                    <p className="text-2xl py-2 font-bold">Seasonality  : <span className="text-2xl text-green-500">{seasonality}</span></p>
                    <p className="text-2xl py-2 font-bold"> Travel time  : <span className="text-xl text-green-500">{time}</span></p>
                    <p className="text-2xl py-2 font-bold"> TotalVisitorsPerYear : <span className="text-xl text-green-500">{totalVisitorsPerYear}</span></p>
                    <p className="text-2xl py-2 font-bold">  Average cost : <span className="text-xl text-green-500">{average}</span></p>
                    <p className="text-2xl py-2 font-bold">  User Name: <span className="text-xl text-green-500">{name}</span></p>
                    <p className="text-2xl py-2 font-bold">User Email: <span className="text-xl text-green-500">{email}</span></p>

                    <Link to={"/AllTouristsSpot"}><button  className="btn btn-outline btn-success">Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Allsoptview;