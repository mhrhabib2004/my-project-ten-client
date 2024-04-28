import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./Provaider/AuthProvaider";

const Mydatalist = () => {
    const {user}= useContext(AuthContext);
    // console.log('contex data ', user.email)
    const mydatalist = useLoaderData();
    const userEmail = user.email;
    const EmailData = mydatalist.filter((userData) => userData.email === userEmail);
    console.log('Filtered Data', EmailData);
   
    const { photo, spot, country, location, description, average, seasonality, time, totalVisitorsPerYear, email, name } = EmailData;
    return (
        <div>
            <h1>hi its habib</h1>
        </div>
    );
};

export default Mydatalist;