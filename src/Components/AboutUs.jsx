import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-extrabold mt-7">Countries</h1>
            <h1 className="text-3xl text-green-500 text-center font-extrabold mt-7"> Southeast Asia
</h1>
            {/* card section */}
            <div className="grid mt-7 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Link to={"/country"}>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src="https://lh5.googleusercontent.com/p/AF1QipPL0IYxiirrmP4REY5ODTnVZOtm6BNc6SWPWAXi=w810-h468-n-k-no" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bangladesh</h2>
                        <p>Bangladesh,[a] officially the People's Republic of Bangladesh,[b] is a country in South Asia. It is the eighth-most populous country in the world and is among the most densely populated countries with a population of nearly 170 million in an area of 148,460 square kilometres (57,320 sq mi)</p>
                        
                    </div>
                </div>
                </Link>
               <Link to={"/country"}>
               <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src="https://lh5.googleusercontent.com/p/AF1QipNFnjBjDVmOM_t020qRsryyVdXGcWMAGFRg1sCV=w810-h468-n-k-no" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Thailand</h2>
                        <p>Thailand,[b] officially the Kingdom of Thailand and historically known as Siam (the official name until 1939),[c] is a country in Southeast Asia on the Indochinese Peninsula. With a population of almost 70 million.</p>
                        
                    </div>
                </div>
               </Link>
                <Link to={"/country"}>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src="https://lh6.googleusercontent.com/proxy/1jBJ6DkVJDO_fsthZ6MZP77iRtdlz-Is0vroTnIT3KlPou0oFRVbiyjXfbsqlW0DJv6sNMJHny4xMWfBL-QBx9PXLfjwYSytsKqWSeFAfKhY8B_s_SBYDLCqFi8FNjKeqW46oJDyKRMliIH2TcIJ3vTcS7tKug=w810-h468-n-k-no" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Indonesia</h2>
                        <p>Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={"/country"}>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTAJ_tZ2zZDrPUXoIJhFelFSWxvtCbmxjFwpzOZdm5uSnH_g8cMzqFjW-kDexkLGa1xsp7bP20XypYA747FHuVpZF5ufKFhFslfwAeUfA" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Malaysia</h2>
                        <p>Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={"/country"}>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSpYyZI-alZgeqFbv5DaXOqrbPIV4XGnsUD6f9zguoreMkmVXl4MB4PlenfNwR0F3NmuOOKKPfeLU7xzbeesojxI8BaDEDE9DMZKmew6L4" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Vietnam</h2>
                        <p>Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic Communist-era leader, Ho Chi Minh, via a huge marble mausoleum.</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={"/country"}>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcShZzcpZMTnfXUDhYRPPTFw2_-c9n6iToyw50VjdbwpsVUsbuvPfAModAraQL6mxqRUI_gMg9Brn22-0U9Kf7p1zGalaxxfJqdP_0NtIw" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cambodia</h2>
                        <p>Cambodia is a Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta, mountains and Gulf of Thailand coastline. Phnom Penh, its capital, is home to the art deco Central Market,</p>
                        
                    </div>
                </div>
                </Link>

            </div>
        </div>
    );
};

export default AboutUs;