import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {singIn}=useContext(userContext)
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        // console.log("submit");
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password);
        singIn(email,password)
        .then(result=>{
            const loguser=result.user;
            console.log("succesfully log in");
            console.log(loguser);
        })
        .catch(error=>{
            console.error(error.message)
        })
        
    }
    return (
        <div>
            <form className="hero min-h-screen bg-base-200" onSubmit={handleFormSubmit}>
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="email"  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <Link className="label-text-alt link link-hover  text-orange-600" to='/register'>NO account? go to Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;