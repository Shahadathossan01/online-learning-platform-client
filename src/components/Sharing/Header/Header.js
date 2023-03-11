import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
    return (
        <div className="navbar bg-info text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li><Link to="/" className=''>Home</Link></li>
                      <li><Link className=''>Blog</Link></li>
                      <li><Link className=''>About</Link></li>
                      <li><Link className=''>Contact</Link></li>
                      <li><Link className=''>FQA/</Link></li>
                      
                   </ul>
                </div>
                  <div>
                  <Link to='/' className="btn btn-ghost normal-case  font-bold text-4xl">E-Learning</Link>
                  </div>
                </div>
                  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold">
                      <li><Link to="/" className=''>Home</Link></li>
                      <li><Link className=''>Blog</Link></li>
                      <li><Link className=''>About</Link></li>
                      <li><Link className=''>Contact</Link></li>
                      <li><Link className=''>FQA/</Link></li>
                    </ul>
                  </div>
                  <div className="navbar-end">

  
                    <ul className='flex px-32 text-4xl font-bold'>
                      {
                        user?.email?
                        <div className='flex'>
                          <li><Link onClick={handleLogOut} className='mx-3'>LogOut</Link></li>
                          <span className='text-xl'>{user?.email.slice(0,10)}</span>
                        </div>
                        
                        :<li><Link to='/login' className=''>LogIn</Link></li>
                      }
                      
                      
                    </ul>
                  </div>
          </div>
    );
};

export default Header;