import React from 'react'
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div>
            ERROR PAGE NOT FOUND<hr />
            <Link to="/" style={{ textDecoration: "none"}} >HOME PAGE</Link>
        </div >
    )
}

export default Error
