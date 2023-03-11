import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import logo from '../../../../src/images/login.svg'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Register = () => {
  const {user,createUser}=useContext(AuthContext)
  const [success,setSuccess]=useState(null)
  const handleSubmit=(event)=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password)
    createUser(email,password)
    .then(result=>{
      const user=result.user
      if(user?.uid){
        form.reset()
        setSuccess('Successfully create an account please logIn')
      }
      console.log(user)
    })
    .catch(error=>console.log(error))
  }
    return (
        <div className="hero py-24 px-24">
  <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
    <div className="text-center mr-12 ">
      <img className='w-full' src={logo} alt="" />
    </div>
    <div className="card  shadow-2xl ">
      <Form onSubmit={handleSubmit} className="card-body">
      <h1 className="text-5xl font-bold">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name="name" placeholder="User Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
          </label>
        </div>
        <h1 className='text-success'>{success}</h1>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <h1 className='mt-5'>Already have an account? <Link  className='text-success' to='/login'>LogIn</Link></h1>
      </Form>
    </div>
  </div>
</div>
    );
};

export default Register;