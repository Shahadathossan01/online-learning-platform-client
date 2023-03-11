import React from 'react';
import img1 from '../../../../images/web.jpg'
import img2 from '../../../../images/2.jpg'
import img3 from '../../../../images/database-blue.png'
import img4 from '../../../../images/mathmethics.jpg'
import img5 from '../../../../images/computer-architecture.jpeg'
import BrandSlider from './BrandSlider';


const Slider = () => {
    const Brand=[
        {
            "id":1,
            "prev":5,
            "next":2,
            "img1":img1
        },
        {
            "id":2,
            "prev":1,
            "next":3,
            "img1":img2
        },
        {
            "id":3,
            "prev":2,
            "next":4,
            "img1":img3
        },
        {
            "id":4,
            "prev":3,
            "next":5,
            "img1":img4
        },
        {
            "id":5,
            "prev":4,
            "next":1,
            "img1":img5
        }
    ]
    return (
        <div className="carousel w-full">
            {
                Brand.map(brand=><BrandSlider
                key={brand.id}
                brand={brand}
                ></BrandSlider>)
            }
        </div>
    );
};

export default Slider;