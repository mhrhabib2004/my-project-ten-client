import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "./Provaider/AuthProvaider";
import { useContext } from "react";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handelSingout = () => {
        logOut()
            .then(()=>{
                swal({
                    title: "Welcome",
                    text: "Your Log out successs",
                    icon: "success",
                    dangerMode: true,
                  })
            })
            .catch()

    }
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/AllTouristsSpot"}>All Tourists Spot</NavLink></li>
        {
      user && (
        <>
          <li><NavLink to={"/AddTouristsSpot"}>Add Tourists Spot</NavLink></li>
        <li><NavLink to={"/MyList"}>My List</NavLink></li>
        </>
      )
    }
    <li><NavLink to={"/errorPage"}>Contact us</NavLink></li>
    
 
    </>
    return (
        <div data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="navbar bg-purple-400  rounded-md animate__animated animate__swing" >
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-sm menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-bold bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold md:text-3xl uppercase ">Trip Trekker</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-sm font-bold menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {
                        user?.email ? <div className="flex gap-2 items-center"><div className="w-10 rounded-full lg:tooltip lg:tooltip-left" data-tip={user?.displayName} >
                            <img className="rounded-full " alt="profile" src={user?.photoURL} />
                        </div> <button onClick={handelSingout} className="btn text-xl font-bold  btn-warning">Sign out</button></div> : <div className="flex gap-1"><Link to={"/Login"}> <button className="btn md:text-xl font-bold btn-outline">Login</button></Link> <Link to={"/Register"}><button className="btn md:text-xl font-bold btn-outline">Register</button></Link></div>
                    }

                </div>
            </div>
        </div>

    );
};

export default Navbar;