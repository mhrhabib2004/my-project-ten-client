
const Slider = () => {
    return (
        <div data-aos="zoom-out" data-aos-duration="1500" className=" mt-7 rounded-xl carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/1LKvNfG/MG-5977.jpg" className="w-full h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTHmitt64x0hxTPeTRUrkG9OJ_NKKfpu6_sq1sLh4F_ZsNyNrBOoe6uMvUvnxZPVsUqOTGBUOol52WAk7dM3e9IU0Vy5JssfxJcavpuLQ" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Barisal_Skyline.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://lh5.googleusercontent.com/p/AF1QipPRDUGIbZ87NNhCWj87tuwNYlxt6IvGhka8Syap=w810-h468-n-k-no" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;