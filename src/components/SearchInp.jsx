import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

export const SearchInp = () => {


  const [res, setRes] = useState()
  const [cuisine, setCuisine] = useState()
  const [diet, setDiet] = useState()

  const [data, setData] = useState([])
  const SearchByQuery = async (query, cuisine, diet) => {

    const API = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7aeb4dab7ae748f49d916de707cdf97e&query=${query}&cuisine=${cuisine}
    &diet=${diet}
    `)
    const data = await API.json()

    setData(data.results)
  }

  useEffect(() => {
    SearchByQuery(res,cuisine,diet)
  }, [res, cuisine,diet])

  return (
    <div>
      <div className='container d-flex align-items-center justify-content-center mt-3'>
        <InpField type='text' placeholder='Search...' className='w-50 bg-dark color-white p-3' onChange={(e) => setRes(e.target.value)} />
      </div>
      <div className='container d-flex align-items-center justify-content-center w-50'>
        <select className='container p-2 w-50 m-4' onChange={(e) => setCuisine(e.target.value)}>
          <option value='African'>African</option>
          <option value='German'>German</option>
          <option value='Mexican'>Mexican</option>
          <option value='Chinese'>Chinese</option>
          <option value='French'>French</option>
          <option value='Korean'>Korean</option>
          <option value='Japanese'>Japanese</option>
          <option value='Italian'>Italian</option>
        </select>

        <select className='container p-2 w-50 m-4' onChange={(e) => setDiet(e.target.value)}>
          <option value='Gluten Free'>Gluten Free</option>
          <option value='Ketogenic'>Ketogenic</option>
          <option value='Vegetarian'>Vegetarian</option>
          <option value='Lacto-Vegetarian'>Lacto-Vegetarian</option>
          <option value='Vegan'>Vegan</option>
          <option value='Pescetarian'>Pescetarian</option>
          <option value='Primal'>Primal</option>
          <option value='Whole30'>Whole30</option>
        </select>
      </div>
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
    </div>
  )
}

const InpField = styled.input`
  color: white;
  border-radius: 30px;
  border: 0;
  outline: 0;
`


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