import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./Provaider/AuthProvaider";
import swal from "sweetalert";


const Mydatalist = () => {
    const { user } = useContext(AuthContext);
    // console.log('contex data ', user.email)
    const mydatalist = useLoaderData();
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
            }
          });

    }
    return (
        <div className="grid mt-7 gap-4 md:grid-cols-2">
            {EmailData.map((data, index) => (
                <div key={index} className="card card-side bg-base-100 shadow-xl">
                    <figure><img className="w-52 ml-3 h-52  rounded-xl" src={data.photo} alt="Spot" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Spot name : {data.spot}</h2>
                        <p>Location : {data.location}</p>
                        <div className="card-actions ">
                            <button className="btn btn-outline btn-accent">Update</button>
                            <button onClick={()=> handledelete(data._id)} className="btn btn-outline btn-secondary">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Mydatalist;