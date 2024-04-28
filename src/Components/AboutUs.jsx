
const AboutUs = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-extrabold mt-7">Sand & surf</h1>
            {/* card section */}
            <div className="grid mt-7 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b9/78/cc/20190309-125548-largejpg.jpg?w=600&h=600&s=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sonadia Island</h2>
                        <p>This is a great place, especially in October-April season. You can see at least thousands of birds, crabs, peaceful yet untouched wild animals, beautiful curved sandy beach a nice river and the best forest experience</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full"  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/84/c9/2a/restaurant-area.jpg?w=600&h=600&s=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mermaid Beach Resort</h2>
                        <p>Mermaid Beach invite you to join us in Cox's Bazar and experience intelligent luxury, slow food, and slow life close proximity to our beautiful beach.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full"  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d2/61/27/laboni-beach-seen-on.jpg?w=600&h=-1&s=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Laboni Beach</h2>
                        <p>We recommend staying at one of the most popular hotels in Cox's Bazar, which include:</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full"  src="https://media-cdn.tripadvisor.com/media/photo-m/1280/25/26/0d/56/beach-salsa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Beach Salsa</h2>
                        <p>There aren't enough food, service, value or atmosphere ratings for Beach Salsa yet</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;