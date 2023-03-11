import React from 'react';
import bkash from '../../../images/bkash.jpg'
import roc from '../../../images/rockt.png'
import nogod from '../../../images/nogod.png'
const Prement = () => {
    return (
        <div className='mx-auto'>
            <div className='text-center text-5xl mt-5 mb-5 text-white'>
                <h1 className='text-5xl font-bold mb-5'>E-Learning</h1>
                <h1 className='text-success'>Mobile Banking</h1>
            </div><hr />
                <div className='flex flex-wrap  justify-center'>
                    <img className='w-1/4 mask mask-hexagon-2 mx-3 ' src={bkash} alt="" />
                    <img className='w-1/4 mask mask-hexagon-2 mx-3 ' src={roc} alt="" />
                    <img className='w-1/4 mask mask-hexagon-2 mx-3 ' src={nogod} alt="" />
                </div>
            
        </div>
    );
};

export default Prement;