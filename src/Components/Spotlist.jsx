import { useLoaderData } from "react-router-dom";
import Spotcard from "./Spotcard";


const Spotlist = () => {
    const addsopts = useLoaderData();
    return (
        <div className="mt-7">
            <h1 className="text-center font-extrabold text-3xl">Tourists Spots</h1>
        <div className="grid md:grid-cols-2 mt-7 gap-4">
            
            {
                addsopts.map(addsopt=><Spotcard key={addsopt._id} addsopt={addsopt}>

                   

                </Spotcard>)
            }
        </div>
        </div>
    );
};

export default Spotlist;