import React, { useState, useContext } from 'react'
import Title from "../components/Title"
import { Link } from "react-router-dom"
import { PhoneContext } from '../context'
import Modal from "react-modal"

Modal.setAppElement('#root')

const PhoneDetails = (props) => {


    const [state, setState] = useState({
        phoneName: props.match.params.id
    })

    const contextType = useContext(PhoneContext)

    const { getPhone, addToCart } = contextType

    const phone = getPhone(state.phoneName)

    // Modal Start Here

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }
    const customStyle = {
        content: {
            width: "25vw",
            height: "80vh",
            margin: "1vw 0 10vw 34vmax"
        }
    }

    //Modal Finish

    let { title, img, price, company, inCart, info } = phone

    
    img = require(`../${phone.img}`)

    return (
        <>
            <Title text={title} />
            <div className="phone__info">
                <div className="phone__leftInfo">
                    <img src={img} alt={title} />
                </div>
                <ul className="phone__rightInfo">
                    <li className="phone__rightInfo-title"> <h1>MODEL: {title}</h1></li>
                    <li className="phone__rightInfo-company">MADE BY : {company}</li>
                    <li className="phone__rightInfo-price">Price: ${price}</li>
                    <li className="phone__rightInfo-info"><h1>Some Info About Product:</h1>
                        <p>{info}</p>
                    </li>
                    <li>
                        <div className="phone__back-button">
                            <Link to="/">
                                Back to Products
                            </Link>
                        </div>

                        {inCart? <div onClick={(e) => openModal(e)} className="phone__add-button">InCart</div> : <div onClick={(e) => {openModal(e); addToCart(phone)}} className="phone__add-button"  >Add to Cart</div> }
                        
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => closeModal()}
                            style={customStyle}
                        >
                            <div className="modalContent">
                                <div className="modalContent__info">
                                    <h1>Item Added To Cart</h1>
                                    <img src={img} alt={title} />
                                    <div className="modalContent__info-title">{title}</div>
                                    <div className="modalContent__info-price">Price - ${price}</div>
                                </div>
                                <div className="modalContent__buttons">
                                    <Link to="/" className='modalContent__buttons-phones'>
                                        Continue Shopping
                                    </Link>
                                    <Link to="/cart" className="modalContent__buttons-cart" >
                                        Go To Cart
                                    </Link>
                                </div>
                            </div>
                        </Modal>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default PhoneDetails
