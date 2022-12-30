import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Authprovider, { AuthContext } from '../../context/Authprovider/Authprovider';
import Loading from '../../pages/shares/loading/Loading';

const Register = () => {
    const { user, createUser, updateUser, loading } = useContext(AuthContext)
    const [signupError, setSignupError] = useState('')
    const navigate = useNavigate()

    const handleregister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(result => {
                const user = result.user
                toast.success('user created successfully')
                navigate('/')

                const userInfo = {
                    displayName: name

                }
                console.log(user)
                updateUser(userInfo)
                updateUser(userInfo)
                    .then(() => {

                    })
                    .catch(err => {
                        console.error(err.message)

                    })
            })
            .catch(err => {
                console.log(err)
                setSignupError(err.message)

            })


    }

    return (
        <div>
            <div className="hero min-h-screen lg:bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:ml-5 lg:text-left">
                        <h1 className="text-5xl font-bold"><span className='text-lime-400 font-extrabold text-6xl'>N</span>oteBook</h1>
                        <p className="py-6 text-2xl">Connect with friends around you on Notebook</p>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">


                        {/* input field  */}

                        <form onSubmit={handleregister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">UserName</span>
                                </label>
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-black text-xl">register</button>
                            </div>
                        </form>
                        <p className='text-xl mb-2 text-center'>Already have an account?<Link to='/auth/login' className='text text-lime-400 font-bold' >Login Now</Link></p>
                        <p className='mt-1 mb-2 text-center text-red-700'>{signupError}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;