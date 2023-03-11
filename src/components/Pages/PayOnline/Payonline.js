import React from 'react';
import { FaDumpster, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Payonline = () => {
    const course=useLoaderData()
    console.log(course)
    const {title,instractor,document_id,Price}=course
    return (
        <div>
            <div className='mx-80 text-2xl text-white mt-5 font-bold'>
                <h1 className='text-5xl mb-3 mx-16'>Apply for this Course</h1><hr />
                <h2>Online Course On {title}.</h2>
                <h1>Instractor Name: {instractor.name}</h1>
                <h1 className='text-xl'>Price: ${Price}</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div className='mx-16'>
                    <h1 className='text-2xl font-bold text-white'>Course Details:</h1><hr className='w-1/2' />
                    <div className='flex items-center'>
                        <FaStarHalfAlt></FaStarHalfAlt>
                        <h3>Start Date: 01/04/2023</h3>
                    </div>
                    <div className='flex items-center'>
                        <FaDumpster></FaDumpster>
                        <h3>Duration: 6 mounth</h3>
                    </div>
                    <div className='flex items-center'>
                        <FaDumpster></FaDumpster>
                        <h3>No. of Classes/Sessions:6</h3>
                    </div>
                    <div className='flex items-center'>
                        <FaDumpster></FaDumpster>
                        <h3>Registration Deadline: 29/03/2023</h3>
                    </div>
                    <h3 className='text-xl font-bold text-white '>Class Schedule:</h3><hr className='w-1/2' />
                    <div className='mx-12'>
                        <h3>Sun (07:30 PM-09:30 PM)</h3>
                        <h3>The (07:30 PM-09:30 PM)</h3>
                        <h3>Thu (07:30 PM-09:30 PM)</h3>
                    </div>
                </div>
                <div className='text-center text-white '>
                    <h1 className='text-4xl font-bold'>Congratulations!</h1>
                    <p className='text-xl mb-4'>Your registration has been successfully completed Thank you.</p>
                    <Link to={`/placeorder/${document_id}`}><button className="btn btn-warning text-xl font-bold">Pay Online</button></Link>
                    <h4>OR</h4>
                    <Link to='/'>Pay Later</Link>
                </div>
            </div>
        </div>
    );
};

export default Payonline;