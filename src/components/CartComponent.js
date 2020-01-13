import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartComponent = ({ phone, incrementQuantity, decrementQuantity, clearExactPhone }) => {
    let { title, img, price } = phone
    img = require(`../${img}`)

    const buy = () => {
        phone.count = phone.count + 1
        incrementQuantity(phone)
    }
    const sell = () => {
        phone.count = phone.count - 1
        decrementQuantity(phone)
    }
    return (
        <tr className="cartComponent__list" >
            <th className="cartComponent__list-img">    <img src={img} alt={title} />    </th>
            <th className="cartComponent__list-title">   {title}   </th>
            <th className="cartComponent__list-price">   ${price}  </th>
            <th className="cartComponent__list-quantity">
                {phone.count <= 1 ? <div className="square" >-</div> : <div className="square" onClick={sell}>-</div>}
                <div className="square">{phone.count}</div>
                <div className="square" onClick={buy} >+</div>
            </th>
            <th className="cartComponent__list-remove" onClick={() => clearExactPhone(phone, phone.count)} > <FontAwesomeIcon className="trash" icon={faTrash} /> </th>
            <th className="cartComponent__list-total">  Item Total:{price * phone.count}  </th>
        </tr >
    )
}

export default CartComponent
