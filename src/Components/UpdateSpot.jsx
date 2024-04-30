
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateSpot = () => {
    const updat = useLoaderData();
    const handleaddspot= e=>{
        e.preventDefault();
        const form=e.target;
        const photo =form.photo.value;
        const spot =form.spot.value;
        const country =form.country.value;
        const location =form.location.value;
        const description =form.description.value;
        const average =form.average.value;
        const seasonality =form.seasonality.value;
        const time =form.time.value;
        const totalVisitorsPerYear =form.totalVisitorsPerYear.value;
        const UpdaetedData ={photo,spot,country,location,description,average,seasonality,time,totalVisitorsPerYear};

        // console.log(newaddspots);
       

        fetch(`https://n-gamma-sand.vercel.app/addspots/${updat._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdaetedData),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount>0){
                swal({
                    title: "WoW",
                    text: "You Updated spot successfully",
                    icon: "success",
                    confirmaButtonText:'cool'
                  })
            }
        })
    }
    const {photo,spot,country,location,description,average,seasonality,time,totalVisitorsPerYear}=updat;

    return (
        <div className="mt-7">
        <h1 className="text-center text-3xl font-extrabold"> <span className="text-red-600">Update </span>Tourists <span className="text-green-900">Spot</span></h1>

        <form  onSubmit={handleaddspot}>
        <div className="grid gap-4 mt-7 w-4/5 mx-auto md:grid-cols-2">
        <div>
                <div className="label">
                    <span className="label-text"> image URL</span>
                </div>
                <input type="text" required  name="photo" defaultValue={photo} className="input input-bordered w-full"/>
        </div>
        <div>
                <div className="label">
                    <span className="label-text">tourists_spot_name</span>
                </div>
                <input type="text" required  name="spot" defaultValue={spot} className="input input-bordered w-full"/>
        </div>
        <div>
                <div className="label">
                    <span className="label-text">country Name</span>
                </div>
                <input type="text" required  name="country" defaultValue={country} className="input input-bordered w-full"/>
        </div>
        <div>
                <div className="label">
                    <span className="label-text">location</span>
                </div>
                <input type="text" required  name="location" defaultValue={location} className="input input-bordered w-full"/>
        </div>
        <div>
                <div className="label ">
                    <span className="label-text w-full">TotaVisitorsPerYear</span>
                </div>
                <input type="text" required  name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} className="input input-bordered w-full"/>
        </div>
        <div>
                <div className="label">
                    <span className="label-text">average cost</span>
                </div>
                <input type="text" required  name="average" defaultValue={average} className="input input-bordered w-full"/>
        </div>
        <div>
                <div className="label">
                    <span className="label-text">seasonality</span>
                </div>
                <input type="text" required   name="seasonality" defaultValue={seasonality} className="input input-bordered w-full"/>
        </div>
        <div>
                <div className="label">
                    <span className="label-text"> travel time</span>
                </div>
                <input type="text" required name="time" defaultValue={time} className="input input-bordered w-full"/>
        </div>
        </div>
        <div className="w-4/5 mx-auto">
                <div className="label">
                    <span className="label-text">short description</span>
                </div>
                <input type="text" required name="description" defaultValue={description} className="input input-bordered w-full"/>
                
        <input className="btn btn-outline btn-warning w-full mt-4 " type="submit" value="Update" />
        
        </div>
        
        
        </form>
    </div>
    );
};

export default UpdateSpot;