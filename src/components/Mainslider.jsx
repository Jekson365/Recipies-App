import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export const Mainslider = () => {
    const sliderContent = [
        {
            img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            priority: "More than 500 000 Recipies From around the world"
        },
        {
            img: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            priority: "Any kind of pizzas"
        },
        {
            img: "https://images.pexels.com/photos/2481630/pexels-photo-2481630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            priority: "Chinese Food"
        }
    ]
    return (
        <div>
            <Swiper style={{ "height": '100vh' }}
                spaceBetween={10}
                centeredSlides={true}
                speed={1500}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliderContent.map((each) => {
                    return (
                        <SwiperSlide className='cover' style={{ "background": `url(${each.img})` }}>
                            <h1 className="fs-2 text-white">{each.priority}</h1>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
