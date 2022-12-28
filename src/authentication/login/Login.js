
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/Authprovider';

const Login = () => {
    const { user, login } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')

    const handlelogin = event => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => {
                console.log(err)
                setLoginError(err.message)
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
                    <div className="card max-w-sm flex-shrink-0 w-full shadow-2xl bg-base-100">


                        {/* input field  */}

                        <form onSubmit={handlelogin} className="card-body">

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
                        <p className='text-xl mb-2 text-center'>New here?<Link to='/auth/register' className='text text-lime-400 font-bold' >Register Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;