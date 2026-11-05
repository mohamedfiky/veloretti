import Slider_1_1 from "../assets/images/sliders/slider-1-1.png" ;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from "swiper/modules"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop = {true}
      navigation
      pagination={{ clickable: true }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="h-[500px] bg-[#007595]">
          <img src={Slider_1_1} className=" w-9/12 h-full object-contain mx-auto " />
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Slider




