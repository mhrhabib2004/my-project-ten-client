import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./Provaider/AuthProvaider";
import swal from "sweetalert";


const Mydatalist = () => {
    const { user } = useContext(AuthContext);
    // console.log('contex data ', user.email)
    const lodedmydatalist = useLoaderData();
    const [mydatalist,setmydatalist]=useState(lodedmydatalist);
    const userEmail = user.email;
    const EmailData = mydatalist.filter((userData) => userData.email === userEmail);
    console.log('Filtered Data', EmailData);

  
    const handledelete=_id=>{
        console.log(_id)
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
          })
         
          .then(willDelete => {
            if (willDelete) {
            //   swal("Deleted!", "Your imaginary file has been deleted!", "success");
           fetch(`http://localhost:5000/addspots/${_id}`,{
            method:"DELETE"
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data)
            if (data.deleted>0) {
                swal("Deleted!", "Your imaginary file has been deleted!", "success");
              }

           })
           const remening = mydatalist.filter(data=>data._id !==_id);
           setmydatalist(remening);
            }
          });

    }
    return (
        <div className="grid mt-7 gap-4 md:grid-cols-2">
            {EmailData.map((data, index) => (
                <div key={index} className="card card-side flex md:flex-row flex-col bg-base-100 shadow-xl">
                    <figure><img className="md:w-52 ml-3 lg:p-2 md:h-52 h-56 w-64  rounded-xl" src={data.photo} alt="Spot" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Spot name : {data.spot}</h2>
                        <p>Location : {data.location}</p>
                        <p>Seasonality: {data.seasonality}</p>
                        <div className="card-actions ">
                            <Link to={`/UpdateSpot/${data._id}`}><button className="btn btn-outline btn-accent">Update</button></Link>
                            <button onClick={()=> handledelete(data._id)} className="btn btn-outline btn-secondary">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Mydatalist;