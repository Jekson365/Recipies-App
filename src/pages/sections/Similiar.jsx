import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import { Link } from 'react-router-dom';



export const Similiar = () => {
    const [similiar, setSimiliar] = useState([])
    const id = useParams()
    const getSimiliar = async (id) => {
        const API = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=d8687e65c18743a2a1b4df77feabec91`)
        const data = await API.json()

        setSimiliar(data)

        console.log(data)
    }

    useEffect(() => {
        getSimiliar(id.id)
    }, [])



    return (

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
            {similiar.map((each) => {
                return (
                    <>
                        <SwiperSlide className='d-flex align-items-center justify-content-center'>
                            <Link to={`/details/${each.id}`} style={{"textDecoration":"none"}}>
                                <Card style={{"backgroundImage":`url(${each.image})`}}>
                                    <p className='fs-6'>{each.title}</p>
                                    <p style={{'fontSize':"13px"}}>Ready in Minutes: {each.readyInMinutes}</p>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    </>
                )
            })}
        </Swiper>

    )
}


const Card = styled.div`
    width: 250px;
    height:200px;
    padding: 10px;
    background-color: #EB6440;
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
        font-weight: bold;
        color: white
        ;
        text-decoration: none;
    }
`
