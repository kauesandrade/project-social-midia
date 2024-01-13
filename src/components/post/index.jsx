import './style.css'

import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa6"; -- Para fazer o like <FaHeart />
import { FaRegComment } from "react-icons/fa6";
import { GoPaperAirplane } from "react-icons/go";
import { MdBookmarkBorder } from "react-icons/md";
// import { MdOutlineBookmark } from "react-icons/md"; --Para add no saves <MdOutlineBookmark />


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const post = () => {
    return (
        <article>
            {/* FAZER UM COMPONENT PARA OS SLIDES */}
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="src/assets/imagens/profile.jpg" alt="Profile Photo" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>

            <section>
                <div className='divIconsPost'>
                    <div className='divFirstIcons'>
                        <div className='divLikeCounter'>
                            <FaRegHeart className='iconsPost'/>  
                            <p className='pCounter'>1000</p>
                        </div>
                        <FaRegComment className='iconsPost'/>
                        <GoPaperAirplane className='iconsPost'/>
                    </div>
                    <div className='divSecondIcons'>
                        <MdBookmarkBorder className='iconsPost'/>
                    </div>
                </div>
                <div className='divDescriptionPost'>
                    <p><span className='spanUsernamePost'>@TatarugaNinja</span> Leonardo sendo leonardo</p>
                </div>
                <div className='divCommentInputPost'>
                    <input className='inputCommentPost' type='text' placeholder='Add a comment...'></input>
                    <button className='buttonShareCommentPost'>Share</button>
                </div>
            </section>
        </article>
    )
}

export default post;