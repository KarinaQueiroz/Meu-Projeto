import React from 'react'
import planet from './planet.jpg'
import './Banner.css'


function Banner(props) {
    return (
        <img className="banner" src={planet} alt="Banner" />
    )
}

export default Banner