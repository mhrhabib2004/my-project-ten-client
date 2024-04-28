import { Link } from "react-router-dom";

const Pakages = () => {
    return (
        <div className="mt-7">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold ">P<span className="text-red-700">A</span>CKAG<span className="text-purple-800">E</span>S</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 mt-7 gap-3">
                    <div className="card card-compact w-auto bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://sylhettouristplaces.com/wp-content/uploads/2020/02/Ratargul-Swamp-Forest-7-1024x683.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Ratargul Swamp Forest</h2>
                            <p className="text-center">Ratargul Swamp Forest is the only fresh water reservoir in Bangladesh and maintained by the Forest Department of Bangladesh.</p>
                            <Link to={"/errorPage"}><p className="btn btn-outline btn-secondary">Price for contrct us</p></Link>
                        </div>
                    </div>
                    <div className="card card-compact w-auto bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://sylhettouristplaces.com/wp-content/uploads/2020/02/Bisnakandi-6-1024x682.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bisnakandi</h2>
                            <p className="text-center">Bisnakandi, conveniently situated near Sylhet on the India-Bangladesh</p>
                            <Link to={"/errorPage"}><p className="btn btn-outline btn-secondary">Price for contrct us</p></Link>
                        </div>
                    </div>
                    <div className="card card-compact w-auto bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://sylhettouristplaces.com/wp-content/uploads/2020/02/Bholaganj-SadaPathor-5-1024x683.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bholaganj SadaPathor</h2>
                            <p className="text-center"> Bholaganj SadaPathor, located in the Companiganj Upazila and near East Khasi Hills district of Meghalaya, India</p>
                            <Link to={"/errorPage"}><p className="btn btn-outline btn-secondary">Price for contrct us</p></Link>
                        </div>
                    </div>
                    <div className="card card-compact w-auto bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Save_the_sundarbans_20.jpg/1280px-Save_the_sundarbans_20.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sundarbans</h2>
                            <p className="text-center">the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.</p>
                            <Link to={"/errorPage"}><p className="btn btn-outline btn-secondary">Price for contrct us</p></Link>
                        </div>
                    </div>
                    <div className="card card-compact w-auto bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tanguar_Haor_2.jpg/1280px-Tanguar_Haor_2.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tanguar Haor</h2>
                            <p className="text-center">tanguar Haor located in the Dharmapasha and Tahirpur upazilas of Sunamganj District in Bangladesh,</p>
                            <Link to={"/errorPage"}><p className="btn btn-outline btn-secondary">Price for contrct us</p></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pakages;