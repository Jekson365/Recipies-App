import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Popslider = () => {
    const [popular, setPopular] = useState([])


    const getPopular = async () => {


        if (localStorage.getItem("popular")) {
            setPopular(JSON.parse(localStorage.getItem('popular')))

        }
        else {
            const API = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d8687e65c18743a2a1b4df77feabec91&cuisine=Italian`)

            const data = await API.json()

            localStorage.setItem('popular', JSON.stringify(data.results))
        }
    }

    useEffect(() => {
        getPopular()
    }, [])




    return (
        <>
            <h3 className='fs-2 text-center m-5' >Italian Cuisine</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
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
                modules={[Pagination]}
                className="mySwiper"
            >
                {popular.map((each) => {
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
