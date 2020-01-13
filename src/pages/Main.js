import React from 'react'
import Phones from '../pages/Phones'
import Title from '../components/Title';


const Main = () => {
    return (
        <>
            <Title text="our products" />
            <div className="phones__container" >
                <Phones />
            </div>
        </>
    )
}

export default Main
