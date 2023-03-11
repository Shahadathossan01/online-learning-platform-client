import React from 'react';

const BrandSlider = ({brand}) => {
    console.log(brand)
    const {img1,id,prev,next}=brand
    return (
            <div id={id} className="carousel-item relative w-full">
                    <img src={img1} alt=''  className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#${prev}`} className="btn btn-circle">❮</a> 
                    <a href={`#${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BrandSlider;