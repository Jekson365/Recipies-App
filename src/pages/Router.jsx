import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Details } from './Details'
import { Home } from './Home'

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path={`/details/:id`} element={<Details/>}/>
            </Routes>
        </div>
    )
}
