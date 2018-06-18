import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import fundo from './parallax.jpg'
 
const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src={fundo} />
    </Parallax>
);

export default Parallax