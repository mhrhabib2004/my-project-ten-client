import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="p-2">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;