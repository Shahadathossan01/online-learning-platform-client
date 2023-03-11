
import { useContext } from 'react';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../src/images/login.svg'
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
  const location=useLocation()
  const from=location.state?.from?.pathname || "/"
  const navigate=useNavigate()
  const {user,googleLogin,signIn}=useContext(AuthContext)
  console.log(user)
  const handleGoogle=()=>{
    googleLogin()
  .then(result=>{
    const user=result.user
    navigate(from,{replace:true})
    console.log(user)
  })
  .catch(error=>console.log(error))
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
      const user=result.user
      form.reset()
      navigate(from,{replace:true})
    })
    .catch(error=>console.log(error))
  }
  
 
    return (
        <div className="hero py-24 px-24">
        <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="text-center">
            <img  src={logo} alt="" />
          </div>
          <div className="card   shadow-2xl ">
            <Form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-5xl font-bold">Login</h1>
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
                  <a href='' className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
                  <h1>Or, Sign In with</h1>
              <div className='flex  justify-center'>
                  <button onClick={handleGoogle}><FaGoogle className='mx-4 text-4xl text-info'></FaGoogle></button>
                  <button><FaGithub className='mx-4 text-4xl'></FaGithub></button>
                  <button><FaLinkedin className='mx-4 text-4xl text-info'></FaLinkedin></button>
                  
              </div>
              <h1 className='mt-5'>Have an accout? <Link className='text-success' to='/register'>Sign In</Link></h1>
      
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Login;