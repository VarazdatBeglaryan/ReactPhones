import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const PhonesContainer = ({ phone, addToCart, removeFromCart }) => {

    let { title, img, price, inCart } = phone

    img = require(`../${img}`)

    return (
        <div className="box">
            <Link to={`/details/${title}`} >
                <div className="box__img">
                    <img src={img} alt={title} />
                </div>
            </Link>
            <div className="box__info">
                <div className="box__info-name">
                    {title}
                </div>
                <div className="box__info-price" >
                    ${price}
                </div>
            </div>
            {
                inCart ? <div onClick={() => removeFromCart(phone)} className="box__cart-true">inCart</div> : <div className="box__cart-false" onClick={() => addToCart(phone)} ><FontAwesomeIcon className="box__cart-img" icon={faCartPlus} /></div>
            }

        </div>

    )
}

export default PhonesContainer
