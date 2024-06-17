import slide1 from "../assets/Img/images/slide1.jpg"
import slide2 from "../assets/Img/images/slide2.jpg"
import slide3 from "../assets/Img/images/slide3.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../scss/Banner.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Banner() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img src={slide1} /></SwiperSlide>
                <SwiperSlide><img src={slide2} /></SwiperSlide>
                <SwiperSlide><img src={slide3} /></SwiperSlide>

            </Swiper>
        </>
    );
}
