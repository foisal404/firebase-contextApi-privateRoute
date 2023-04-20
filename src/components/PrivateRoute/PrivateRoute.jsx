import React from 'react';
import { userContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(userContext)
    // console.log(user);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
            return children;
    }
    return <Navigate to="/login" replace={true} ></Navigate>;   

};

export default PrivateRoute;