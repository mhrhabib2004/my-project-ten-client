import { useLoaderData } from "react-router-dom";
import Spotcard from "./Spotcard";
import { useState } from "react";


const Spotlist = () => {
    const addsopts = useLoaderData();
    const [sortBy, setSortBy] = useState(null);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    }

    const sortedData = [...addsopts].sort((a, b) => {
        if (sortBy === "ascending") {
            return a.average - b.average;
        } else if (sortBy === "descending") {
            return b.average - a.average;
        } else {
            return 0;
        }
    });

    return (
        <div className="mt-7 ">
            <h1 className="text-center font-extrabold text-3xl">All <span className="text-green-700">Tourists</span> Spots</h1>
           <div className="flex mt-7 justify-center">
           <select className="select  select-error w-full max-w-xs text-xl" onChange={handleSortChange}>
                <option value="">Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
           </div>
            <div className="grid md:grid-cols-2 mt-7 gap-4">


                {
                    sortedData.map(addsopt => <Spotcard key={addsopt._id} addsopt={addsopt}>



                    </Spotcard>)
                }
            </div>
        </div>
    );
};

export default Spotlist;