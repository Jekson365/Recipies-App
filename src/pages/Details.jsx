import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {
    const [data, setData] = useState([])
    const id = useParams()

    const getDetails = async (id) => {
        const API = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=548ede884c544b53ab828964473c3dd4`)
        const data = await API.json()

        setData(data)

    }

    useEffect(() => {
        getDetails(id.id)
        console.log(data)
    },[id.id])

    return (
        <div>
            <div className='container mt-5 d-flex'>
                <div className="col-md-6">
                    <img src={data.image} className=''/>
                </div>
                <div className="col-md-6 p-3">
                    <h3 className='fs-3'>{data.title}</h3>
                    <p dangerouslySetInnerHTML={{__html:data.summary}} style={{"fontSize":"13px"}}></p>
                </div>
            </div>
        </div>
    )
}
