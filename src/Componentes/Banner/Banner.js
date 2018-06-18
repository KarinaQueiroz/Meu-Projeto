import React from 'react'
import planet from './planet.jpg'
import './Banner.css'


function Banner(props) {
    return (
        <img id="#id-banner" className="banner" src={planet} alt="Banner" />
    )
}

export default Banner