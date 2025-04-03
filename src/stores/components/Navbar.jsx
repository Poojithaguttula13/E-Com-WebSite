
import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const Navbar = () => {

    const {cartItems} = useCart()

  return (
    <>
        <div className='navSection'>
    <div className="title">
        <Link to="/" className="custom-link">
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
        <Link to='/cart' className="custom-link">
        <div className="cart">
            Cart
            <span>{cartItems.length}</span>
        </div>
        </Link>
    </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to="/mobile" className="custom-link">
            <li >Mobiles</li>
            </Link>
            <Link to="/computer" className="custom-link">
            <li>Computers</li>
            </Link>
            <Link to="/watch" className="custom-link">   
            <li>Watches</li>
            </Link>
            <Link to="/men" className="custom-link">
            <li>Men Fashion</li>
            </Link>
            <Link to="/women" className="custom-link">
            <li>Women Dressing</li>
            </Link>
            <Link to="/book" className="custom-link">
            <li>Books</li>
            </Link>
            <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
            </Link>
            <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
            </Link>
            <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
            </Link>
            <Link to="/speaker" className="custom-link">
            <li>Speakers</li>
            </Link>
            <Link to="/ac" className="custom-link">
            <li>AC</li>
            </Link>
            <Link to="/tv" className="custom-link">
            <li>TV's</li>
            </Link>

        </ul>
    </div>
    </>
  )
}

export default Navbar
