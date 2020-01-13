import React, { useState, createContext } from 'react'
import { storeProducts } from "./data"

const PhoneContext = createContext()

const PhoneProvider = ({ children }) => {

    const [state, setState] = useState(storeProducts);
    const [sum, setSum] = useState(0);

    //ge exact Phone
    const getPhone = phoneName => {
        let phones = [...state]
        const phone = phones.find(phone => phone.title === phoneName)
        return phone
    }
    //end

    //Add and Remove from Cars Start
    const addToCart = (phone) => {
        setSum(sum + phone.price)
        phone.count = phone.count+1
        phone.inCart = true
    }

    const removeFromCart = (phone) => {
        setSum(sum - phone.price*phone.count)
        phone.count = 0
        phone.inCart = false
    }
    //Add and Remove from Cars Finish

    // set Quantity
    const incrementQuantity = (phone) => {
        setSum(sum + phone.price)
    }
    const decrementQuantity = (phone) => {
        setSum(sum - phone.price)
    }
    // Quantity Finish


    // get only Phones from Cart 
    const filterPhones = () => {
        let phones = [...state]
        let filtred = phones.filter(phone => phone.inCart === true)
        return filtred;
    }
    //End

    //clear exact phone
    const clearExactPhone = (phone, quantity) => {
        phone.inCart = false
        setSum(sum - phone.price * quantity)
    }
    //finish clear exact phone
    const clearCart = () => {
        setSum(0)
        state.map(phone => {
            phone.inCart = false
        })
    }

    return (
        <PhoneContext.Provider value={{
            sortedPhones: state,
            getPhone,
            sum,
            filterPhones,
            addToCart,
            removeFromCart,
            incrementQuantity,
            decrementQuantity,
            clearCart,
            clearExactPhone, 
        }} >
            {children}
        </PhoneContext.Provider>
    )
}

const PhoneConsumer = PhoneContext.Consumer

export { PhoneProvider, PhoneContext, PhoneConsumer }
