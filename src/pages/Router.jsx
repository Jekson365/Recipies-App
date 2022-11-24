import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Details } from './Details'
import { Home } from './Home'
import { Search } from './Search'

export const Router = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path={`/details/:id`} element={<Details/>}/>
                <Route path={'/search'} element={<Search/>}/>
            </Routes>
        </div>
    )
}
