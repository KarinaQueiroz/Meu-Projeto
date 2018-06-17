import React from 'react'
import gatinho from './gatinho.jpg'
import './Banner.css'


function Banner(props) {
    return (
        <img className="banner" src={gatinho} alt="Banner" />
    )
}

export default Banner