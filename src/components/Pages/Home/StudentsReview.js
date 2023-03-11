import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import img1 from '../../../../src/images/1.png'
import img2 from '../../../../src/images/2.jpg'
import img3 from '../../../../src/images/database-blue.png'
import img4 from '../../../../src/images/mathmethics.jpg'
import img5 from '../../../../src/images/computer-architecture.jpeg'
const StudentsReview = () => {
    return (
        <div className=''>
            <h1 className='text-center text-5xl font-bold text-info '>Our Students Reviews</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore minus ipsum laboriosam! Tempora vitae nihil, officia suscipit soluta ex?</p>
            <div className='flex flex-wrap px-16 mt-12 mb-12'>
                <div className="card card-compact w-96  shadow-xl mb-12">
                        <div className='flex mx-3 mt-3'>
                            <img src={img1} className="w-20 rounded-full mask mask-decagon" alt="Shoes" />
                            <div className='mx-4'>
                                <h1>title</h1>
                                <h3>Linkdin Leader</h3> 
                            <div className='flex  items-center'>
                                 <FaStarHalfAlt className='mx-2'></FaStarHalfAlt>
                                 <h1>5.0</h1>
                            </div>
                            </div>  
                        </div>
                    <div className="card-body">
                      <p className='w-30'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-96  shadow-xl mb-12">
                        <div className='flex mx-3 mt-3'>
                            <img src={img2} className="w-20 rounded-full mask mask-decagon" alt="Shoes" />
                            <div className='mx-4'>
                                <h1>title</h1>
                                <h3>Linkdin Leader</h3> 
                            <div className='flex  items-center'>
                                 <FaStarHalfAlt className='mx-2'></FaStarHalfAlt>
                                 <h1>5.0</h1>
                            </div>
                            </div>  
                        </div>
                    <div className="card-body">
                      <p className='w-30'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-96  shadow-xl mb-12">
                        <div className='flex mx-3 mt-3'>
                            <img src={img3} className="w-20 rounded-full mask mask-decagon" alt="Shoes" />
                            <div className='mx-4'>
                                <h1>title</h1>
                                <h3>Linkdin Leader</h3> 
                            <div className='flex  items-center'>
                                 <FaStarHalfAlt className='mx-2'></FaStarHalfAlt>
                                 <h1>5.0</h1>
                            </div>
                            </div>  
                        </div>
                    <div className="card-body">
                      <p className='w-30'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-96  shadow-xl mb-12">
                        <div className='flex mx-3 mt-3'>
                            <img src={img4} className="w-20 rounded-full mask mask-decagon" alt="Shoes" />
                            <div className='mx-4'>
                                <h1>title</h1>
                                <h3>Linkdin Leader</h3> 
                            <div className='flex  items-center'>
                                 <FaStarHalfAlt className='mx-2'></FaStarHalfAlt>
                                 <h1>5.0</h1>
                            </div>
                            </div>  
                        </div>
                    <div className="card-body">
                      <p className='w-30'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-96  shadow-xl mb-12">
                        <div className='flex mx-3 mt-3'>
                            <img src={img5} className="w-20 rounded-full mask mask-decagon" alt="Shoes" />
                            <div className='mx-4'>
                                <h1>title</h1>
                                <h3>Linkdin Leader</h3> 
                            <div className='flex  items-center'>
                                 <FaStarHalfAlt className='mx-2'></FaStarHalfAlt>
                                 <h1>5.0</h1>
                            </div>
                            </div>  
                        </div>
                    <div className="card-body">
                      <p className='w-30'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-96  shadow-xl mb-12">
                        <div className='flex mx-3 mt-3'>
                            <img src={img4} className="w-20 rounded-full mask mask-decagon" alt="Shoes" />
                            <div className='mx-4'>
                                <h1>title</h1>
                                <h3>Linkdin Leader</h3> 
                            <div className='flex  items-center'>
                                 <FaStarHalfAlt className='mx-2'></FaStarHalfAlt>
                                 <h1>5.0</h1>
                            </div>
                            </div>  
                        </div>
                    <div className="card-body">
                      <p className='w-30'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsReview;