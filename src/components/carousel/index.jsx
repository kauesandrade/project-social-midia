import './style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const carousel = (props) => {

    const SwiperSlideImgs = props.srcPhotos.map((imgs, key) =><SwiperSlide key={key}><img src={imgs} /></SwiperSlide>);

    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {SwiperSlideImgs}
        </Swiper>

    )
}

export default carousel;