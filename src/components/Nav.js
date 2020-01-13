import React from 'react'
import logo from "../img/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo"> <img src={logo} alt="logo" /> </div>
            <Link to="/" className="products">Products</Link>
            <Link to="/cart" className="cart">
                <FontAwesomeIcon className="cart__icon" icon={faCartPlus} />
                <div className="cart__text" >MY CART </div>
            </Link>
        </nav>
    )
}

export default Nav
