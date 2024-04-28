import { useEffect, useState } from "react";
import Spotcardhome from "./Spotcardhome";

const TouristSpot = () => {
    const [addsopt, setaddspot] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addspots')
            .then(res => res.json())
            .then(data => setaddspot(data))
    }, [])
    return (
        <div className="mt-7">
            <h1 className="text-center font-extrabold text-3xl">Tourists Spots</h1>

            <div className="grid md:grid-cols-2 mt-7 gap-4">
                {
                    addsopt.slice(0, 6).map(addsopt => <Spotcardhome key={addsopt._id} addspot={addsopt}></Spotcardhome>)
                }
            </div>
        </div>
    );
};

export default TouristSpot;