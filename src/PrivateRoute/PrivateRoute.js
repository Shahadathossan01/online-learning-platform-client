import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()
        if(loader){
            return <div>Loading</div>
        }
        if(!user)
        {
            return <Navigate to="/login" state={{from:location}} replace></Navigate>
        }
        return children
    
};

export default PrivateRoute;