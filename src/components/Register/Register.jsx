import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../AuthProvider/AuthProvider';



const Register = () => {
    const {createUser}=useContext(userContext)
    // console.log(user.auth);
    const formHandler=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password);
        createUser(email,password)
        .then(result=>{
            const logUser=result.user;
            console.log(logUser);
            console.log("login succesfully");
            form.reset();
        })
        .catch(error=>{
            console.error(error.message)
        })


    }
    return (
        <div>
            <form className="hero min-h-screen bg-base-200" onSubmit={formHandler}>
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                               
                                <label className="label">
                                    <Link className="label-text-alt link link-hover  text-orange-600" to='/login'>Alreadt register? go to Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;