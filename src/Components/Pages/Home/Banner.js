import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../../Assets/Banner-Img/banner1.png";

// import required modules
import { Autoplay, Pagination } from "swiper";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="bg-gray-300 py-3 px-16 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="w-full text-center lg:w-1/2">
          <h2 className="lg:text-5xl">The Big Offers Day</h2>
        </div>
        <div className="w-full lg:w-1/2">
          <img className="w-64 mx-auto" src={Banner1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-gray-300 py-3 px-16 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="w-full text-center lg:w-1/2">
          <h2 className="lg:text-5xl">The Big Offers Day</h2>
        </div>
        <div className="w-full lg:w-1/2">
          <img className="w-64 mx-auto" src={Banner1} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
