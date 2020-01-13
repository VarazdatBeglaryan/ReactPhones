import React, { useContext } from 'react'
import { PhoneContext } from '../context'
import Title from '../components/Title'
import CartComponent from '../components/CartComponent'



const Cart = () => {
    const contextType = useContext(PhoneContext)
    const { sum, filterPhones, sortedPhones, incrementQuantity, decrementQuantity, clearCart, clearExactPhone, quantity } = contextType
    const phones = filterPhones(sortedPhones)

    return (
        <>
            <Title text="Your Cart" />
            <section className="cart__list">
                <table className="cart__table" >
                    <thead>
                        <tr className="cart__table-title" >
                            <th>PRODUCTS</th>
                            <th>NAME OF PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>REMOVE</th>
                            <th>TOTAL</th>
                        </tr>
                        {phones.map((phone) => (
                            <CartComponent phone={phone} key={phone.id} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} clearExactPhone={clearExactPhone} quantity={quantity} />
                        ))}
                    </thead>
                </table>
                <div className="right__box">
                    <section className="clear" onClick={clearCart}>
                        CLEAR CART
                    </section>
                    <section className="total">
                        TOTAL: {sum}
                    </section>
                </div>
            </section>
        </>
    )
}

export default Cart
