import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { About } from './sections/About'
import { RecDetails } from './sections/RecDetails'
import { Rules } from './sections/Rules'

export const Details = () => {
    const [selected, setSelected] = useState("about")
    const [data, setData] = useState([])
    const id = useParams()

    const getDetails = async (id) => {
        const API = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d8687e65c18743a2a1b4df77feabec91`)
        const data = await API.json()

        setData(data)

    }

    useEffect(() => {
        getDetails(id.id)
        console.log(data)
    }, [id.id])

    return (
        <div>
            <div className='container mt-5 d-flex flex-wrap'>
                <div className="col-md-6 w-md-50 text-center d-flex align-items-start justify-content-center">
                    <img src={data.image} className='w-100'/>
                </div>
                <div className="col-md-6 p-3">
                    <h3 className='fs-3'>{data.title}</h3>
                    <div className="buttons d-flex justify-content-start">
                        <button className='selection' onClick={() => setSelected("about")}>About</button>
                        <button className='selection' onClick={() => setSelected("ingredients")}>Ingredients</button>
                        <button className='selection' onClick={() => setSelected("rules")}>Guide</button>
                    </div>
                    <div style={{ "marginTop": "10px" }}>
                        {selected === 'about' ? <About data={data} /> : selected === 'ingredients' ? <RecDetails data={data} /> : selected === 'rules' ? <Rules data={data}/> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}