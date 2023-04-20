import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(userContext)
    const handlerlogOut=()=>{
        logOut()
        .then(()=>{
            console.log("sign out");
        })
        .catch(error=>{
            console.error(error.message);
        })
    }

    return (
        <nav>
            <div className="navbar bg-neutral text-neutral-content flex justify-between">   
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/' >Context Master</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/" >Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/dashboard" >dashboard</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/login" >login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/register" >Register</Link>
                </div>
                <div>
                {
                    user? <p>{user.email} <button onClick={handlerlogOut} className='mx-6 btn  btn-accent'>Singout</button> </p>:
                    <Link className="btn btn-ghost normal-case text-xl" to="/login" >login</Link>
                }
                </div>
            </div>
        </nav>
    );
};

export default Header;