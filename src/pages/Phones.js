import React from 'react'
import PhonesContainer from '../components/PhonesContainer'
import { PhoneConsumer } from '../context'

const Phones = () => {

    return (
        <PhoneConsumer>
            {
                (value) => {

                    return (
                        <>
                            {
                                value.sortedPhones.map((info, index) => (
                                    <PhonesContainer key={index} phone={info} addToCart={value.addToCart} removeFromCart={value.removeFromCart} />
                                ))
                            }
                        </>
                    )
                }
            }
        </PhoneConsumer>
    )
}

export default Phones
