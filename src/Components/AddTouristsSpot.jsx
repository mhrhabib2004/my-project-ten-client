import { useContext } from "react";
import { AuthContext } from "./Provaider/AuthProvaider";

const AddTouristsSpot = () => {
    const {user}=useContext(AuthContext);
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
        const email=form.email.value;
        const name =form.name.value;
        const newaddspots ={photo,spot,country,location,description,average,seasonality,time,totalVisitorsPerYear,email,name};
        console.log(newaddspots);

        fetch('http://localhost:5000/addspots',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newaddspots),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
     }

   
    return (
        <div className="mt-7">
            <h1 className="text-center text-3xl font-extrabold"> <span className="text-red-600">Add </span>Tourists <span className="text-green-900">Spot</span></h1>

            <form  onSubmit={handleaddspot}>
            <div className="grid gap-4 mt-7 w-4/5 mx-auto md:grid-cols-2">
            <div>
                    <div className="label">
                        <span className="label-text"> image URL</span>
                    </div>
                    <input type="text" required  name="photo" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text">tourists_spot_name</span>
                    </div>
                    <input type="text" required  name="spot" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text">country Name</span>
                    </div>
                    <input type="text" required  name="country" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text">location</span>
                    </div>
                    <input type="text" required  name="location" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label ">
                        <span className="label-text w-full">short description</span>
                    </div>
                    <input type="text" required  name="description" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text">average cost</span>
                    </div>
                    <input type="text" required  name="average" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text">seasonality</span>
                    </div>
                    <input type="text" required   name="seasonality" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text"> travel time</span>
                    </div>
                    <input type="text" required name="time" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text">totaVisitorsPerYear</span>
                    </div>
                    <input type="text" required name="totalVisitorsPerYear" placeholder="Type here" className="input input-bordered w-full"/>
            </div>
            <div>
                    <div className="label">
                        <span className="label-text"> User Email</span>
                    </div>
                    <input type="email" required name="email" value={user?.email} className="input input-bordered w-full"/>
            </div>
            
            </div>
            <div className="w-4/5 mx-auto">
            <div>
                    <div className="label">
                        <span className="label-text">User Name</span>
                    </div>
                    <input type="text" required name="name" value={user?.displayName} className="input input-bordered w-full"/>
            </div>
            <div>
                    
                   <input className="btn mt-4  w-full" type="submit" value="Add" />
            </div>
            </div>
            </form>
        </div>
    );
};

export default AddTouristsSpot;