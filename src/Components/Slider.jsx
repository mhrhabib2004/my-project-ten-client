import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
const Slider = () => {
    return (
        <div data-aos="zoom-out" data-aos-duration="1500" className=" mt-7 rounded-xl relative carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT6TsWWNpemjIOsuUoKE9lO7sx-Wg_Xhnf84COyheJGEKGtttL2TEHIzABROP52hQL4mF0fJdcVkHFUfC3tMCO5wAItHHrS0inIt-0C1A" className="w-full h-auto" />
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

            <div className="lg:w-1/2 absolute lg:left-[10%] md:left-[7%] left-[5%] lg:top-1/3 md:top-[20%] top-[15%] ">
                <h1 className="md:text-5xl text-xl font-bold text-white ">Hello there</h1>
                {/* animation Text */}
                <h1 className="md:mb-5 md:text-5xl text-xl font-bold text-white md:py-4 m-auto" >
                    Life is simple
                    <span className="text-red-600 font-bold" >
                        <Typewriter
                            words={['Tour', 'Sleep', 'Journey', 'Repeat!']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                {/* animation Text */}
                <p className="md:mb-5 md:text-sm md:font-bold text-white">
                    Exploring new places fuels the souls thirst for adventure, unveiling hidden wonders and forging unforgettable memories. Across landscapes and cultures, we discover the beauty of diversity, weaving our own unique narrative in the fabric of the world. With each journey.
                </p>
                

            </div>
        </div>
    );
};

export default Slider;
