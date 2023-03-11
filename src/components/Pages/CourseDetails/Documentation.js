import React from 'react';
import { FaBackward } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Module from './Module';

const Documentation = () => {
    const documents=useLoaderData()
    console.log(documents)
    const {title,modules,document_id}=documents

    return (
        <div>
            <div className='flex justify-around'>
                <div className='mt-24 flex items-center font-bold text-xl'>
                    <FaBackward className='text-warning mx-1'></FaBackward>
                    <Link to={`/courses/${document_id}`}><h1 className='text-white'>Back Page</h1></Link>
                </div>
                <h1 className='mt-12 text-6xl font-bold text-center'>Programming Language in: {title}</h1>
            </div>
            
                <div>
                    {
                        modules.map(module=><Module
                        module={module}
                        ></Module>)
                    }
                </div>
        </div>
    );
};

export default Documentation;