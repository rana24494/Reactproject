import React from 'react';
import Slider from "react-slick";

import side1 from '../../resources/images/side1.jpg';
import side2 from '../../resources/images/side2.jpg';
import side3 from '../../resources/images/side3.jpg';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 200
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${side1})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${side2})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${side3})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;