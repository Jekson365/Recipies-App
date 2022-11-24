import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { About } from './sections/About'
import { RecDetails } from './sections/RecDetails'
import { Rules } from './sections/Rules'
import { Similiar } from './sections/Similiar'

export const Details = () => {
    const [selected, setSelected] = useState("about")
    const [data, setData] = useState([])
    const id = useParams()

    const getDetails = async (id) => {
        const API = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7aeb4dab7ae748f49d916de707cdf97e`)
        const data = await API.json()

        setData(data)

    }

    useEffect(() => {
        getDetails(id.id)
        console.log(data)
    }, [id.id])

    return (
        <div>
            <div className='container mt-5 d-flex flex-wrap' style={{"height":'70vh'}}>
                <div className="col-md-6 w-md-50 text-center d-flex align-items-start justify-content-center">
                    <img src={data.image} className='w-100'/>
                </div>
                <div className="col-md-6 p-3">
                    <h3 className='fs-3'>{data.title}</h3>
                    <div className="buttons d-flex justify-content-start">
                        <button className={selected === 'about' ? "selection selected-section" : "selection"} onClick={() => setSelected("about")}>About</button>
                        <button className={selected === 'ingredients' ? "selection selected-section" : "selection"} onClick={() => setSelected("ingredients")}>Ingredients</button>
                        <button className={selected === 'rules' ? "selection selected-section" : "selection"} onClick={() => setSelected("rules")}>Guide</button>
                    </div>
                    <div style={{ "marginTop": "10px" }}>
                        {selected === 'about' ? <About data={data} /> : selected === 'ingredients' ? <RecDetails data={data} /> : selected === 'rules' ? <Rules data={data}/> : ""}
                    </div>                    
                </div>
            </div>
            <h1 className='m-5 fs-3 text-center'>Similiar Recipies</h1>
            <div className="container">
                <Similiar/>
            </div>
        </div>
    )
}