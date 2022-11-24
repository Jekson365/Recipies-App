import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';


export const Popslider_2 = () => {
    const [popular, setPopular] = useState([])


    const getPopular = async () => {


        if (localStorage.getItem("american")) {
            setPopular(JSON.parse(localStorage.getItem('american')))

        }
        else {
            const API = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7aeb4dab7ae748f49d916de707cdf97e&cuisine=American`)

            const data = await API.json()

            setPopular(data.results)

            localStorage.setItem('american', JSON.stringify(data.results))
        }
    }

    useEffect(() => {
        getPopular()
    }, [])

    return (
        <>
            <h3 className='fs-2 text-center m-5' >American Cuisine</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay = {{
                    delay:2500
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    240: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
            >
                {popular && popular.map((each) => {
                    return (
                        <>
                            <SwiperSlide className='d-flex align-items-center justify-content-center'>
                                <Link to={`/details/${each.id}`}>
                                    <img src={each.image} style={{ "width": "250px", 'textAlign': "center", "borderRadius": "10px" }} />
                                </Link>
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    )
}
