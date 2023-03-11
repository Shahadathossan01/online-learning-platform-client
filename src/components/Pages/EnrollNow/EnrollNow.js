import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../../../src/images/1.png'
const EnrollNow = () => {
    const documents=useLoaderData()
    console.log(documents)
    const {Price,document_id,instractor,modules,title}=documents
    return (
        <div >
            <div className="card card-compact w-1/2 mx-auto shadow-xl mb-12 mt-12 text-white">
                        <div className='mt-3'>
                            <img src={img1} className="w-24 rounded-full mask mask-decagon" alt="Shoes" />
                            <h1 className='mx-4 mt-2 text-xl text-warning font-bold'>Instructor: {instractor.name}</h1>
                            <p className='mx-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, id.</p>
                        </div>
                    <div className="card-body">
                      <h1 className='text-4xl'>Tranining Modules:</h1>
                      <hr />
                      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2'>
                            <div>
                                {
                                    modules.map(mod=><h1 className='mt-5 text-xl font-bold'>{mod.module}</h1>)
                                }
                            </div>
                            <div className='text-center mt-24'>
                                <Link to={`/payonline/${document_id}`}><h1 className="btn btn-outline btn-warning font-bold text-xl">Apply Now</h1></Link>
                                <div className='mt-12'>
                                    <h1 className="btn btn-outline btn-success  font-bold text-xl">contract us!</h1>
                                </div>
                            </div>
                            
                      </div>
                    </div>
                </div>
        </div>
    );
};

export default EnrollNow;