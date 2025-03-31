

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navSection'>
    <div className="title">
        <Link to="/">
        <h2>E-Mart</h2>
        </Link>
    </div>
    <div className="search">
        <input type="text" placeholder='Search...' />
    </div>
    <div className="user">
        <div className="user-detail">
            SignIn/SignUp
        </div>
        <div className="cart">
            Cart
        </div>
    </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to="/mobile">
            <li >Mobiles</li>
            </Link>
            <Link to="/computer">
            <li>Computers</li>
            </Link>
            <Link to="/watch">   
            <li>Watches</li>
            </Link>
            <Link to="/men">
            <li>Men Fashion</li>
            </Link>
            <Link to="/women">
            <li>Women Dressing</li>
            </Link>
            <Link to="/book">
            <li>Books</li>
            </Link>
            <Link to="/furniture">
            <li>Furniture</li>
            </Link>
            <Link to="/kitchen">
            <li>Kitchen</li>
            </Link>
            <Link to="/fridge">
            <li>Fridge</li>
            </Link>
            <Link to="/speaker">
            <li>Speakers</li>
            </Link>
            <Link to="/ac">
            <li>AC</li>
            </Link>
            <Link to="/tv">
            <li>TV's</li>
            </Link>

        </ul>
    </div>
    </>
  )
}

export default Navbar
