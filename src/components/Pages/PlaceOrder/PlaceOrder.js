import React from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link, useLoaderData, useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const navigate=useNavigate()
    const documents=useLoaderData()
    console.log(documents)
    const{title,Price,document_id}=documents
    const price=Price;
    const onlineCharge=3;
    const total=parseInt((price*onlineCharge)/100)+(parseInt(price))
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        console.log(name)
        console.log('success')
        toast.success('Successfully Place Order')
        navigate('/prement')
    }     
    return (
        <div>

                <Form onSubmit={handleSubmit} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-12 mb-12'>
                    <div className='flex flex-col items-center'>
                        <input type="text" name="name" placeholder="Your Name" required className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="phone" placeholder="Phone"  className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="gmail" placeholder="gmail"  className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="text" placeholder="Country"  className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="text" placeholder="Division" className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="text" placeholder="District" className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="text" placeholder="Sub District" className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="text" placeholder="Full Address" className="input mt-4 text-black w-1/2 bg-white" />
                        <input type="text" placeholder="Post Code"  className="input mt-4 text-black w-1/2 bg-white" />
                    </div>
                    <div className='mt-16 '>
                        <h1 className='text-center text-4xl font-bold text-white'>YOUR ORDER</h1><hr />
                        <div className='flex justify-between mt-3 mb-3 text-xl text-white'>
                            <h1>Product</h1>
                            <h1>Subtotal</h1>
                        </div>
                        <div className='flex justify-between mt-3 mb-3 text-xl text-white'  >
                            <h1>Online Course On {title}</h1>
                            <span>Price: ${Price}</span>
                        </div>
                        <div className='flex justify-between mt-3 mb-3 text-xl text-white'  >
                            <h1>Online Charge</h1>
                            <h1>3%</h1>
                        </div>
                        <div className='flex justify-between mt-3 mb-3 text-xl text-white'  >
                            <h1>Total</h1>
                            <h2>{total}</h2>
                        </div>
                        <div>
                        
                        <p className='text-1xl'>Your personal data will be used to process your order,support experience throughout this website,and for other purpose described in our <Link className='text-info' to='/privacy'>privacy policy.</Link></p>
                        
                        </div>
                        <div className='text-center mt-24'>
                        <button className="btn btn-warning text-3xl w-80 font-bold">Place Order</button>
                        </div>
                    </div>
                </Form>

        </div>
    );
};

export default PlaceOrder;