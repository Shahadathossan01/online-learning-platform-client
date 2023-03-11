import React from 'react';

const Module = ({module}) => {
    console.log(module)
    return (
        <div>
            <h1 className='text-3xl mt-5 fond-bold bg-success text-black p-2'>{module.module}</h1>
            <p className='text-xl mt-2 text-white'>{module.define}</p>
        </div>
    );
};

export default Module;