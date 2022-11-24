import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Popslider } from '../components/Popslider'
import { Popslider_2 } from '../components/Popslider_2'
import { Mainslider } from '../components/Mainslider'
import { Navbar } from '../components/Navbar'
export const Home = () => {

    const [data, setData] = useState([])

    const getHunderRecipies = async () => {

        if (localStorage.getItem("data")) {
            setData(JSON.parse(localStorage.getItem("data")))
        }
        else {
            const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7aeb4dab7ae748f49d916de707cdf97e&number=100'

            const promise = await fetch(API)

            const data = await promise.json()

            setData(data.results)

            localStorage.setItem("data", JSON.stringify(data.results))

        }


    }
    useEffect(() => {
        getHunderRecipies()

    }, [])


    return (
        <>
            <Mainslider />
            <div className='container'>
                <Popslider_2 />
                <Popslider />
            </div>
            <h3 className='fs-2 text-center m-5'>Our Products</h3>
            <Wrapper className='container-fluid'>
                {data.map((single) => {
                    return (
                        <Card>
                            <Link to={`/details/${single.id}`} >
                                <div className="cover">
                                    <img src={single.image} />
                                </div>
                                <p>
                                    {single.title}
                                </p>
                            </Link>
                        </Card>
                    )
                })}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100% !important;  
    .cover {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        height: 70%;
    }
    .cover img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    p {

        margin-top:5px;
        font-weight: bold;
    }
    a {
        color:black;
        text-decoration: none;
    }
`
const Card = styled.div`
    padding: 10px;
    width:250px;
    margin: 10px;
    height: 270px;
    background-color: white;

`