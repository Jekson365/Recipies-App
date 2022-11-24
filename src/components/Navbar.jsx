import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className='container-fluid bg-dark d-flex align-items-center justify-content-center p-3'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/search'}>Discover</Link>
                </li>
            </nav>
        </div>
    )
}
