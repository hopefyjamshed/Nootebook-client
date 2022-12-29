import React, { useContext, useState } from 'react';
import { FaBeer, FaBell, FaHome, FaInbox, FaNeos, FaPhotoVideo } from 'react-icons/fa';
import { HiChatAlt, IconName } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import { MdChat, MdMail, MdPermMedia } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import img from '../../../assets/images/profileimg.jpg'
import Loading from '../loading/Loading';

const Navbar = () => {
    const [profile, setProfile] = useState([])
    const navigate = useNavigate()
    const { user, logout, loading } = useContext(AuthContext)

    const handlelogout = () => {
        logout()
            .then(() => {
                navigate('/auth/login')
            })
            .catch(err => {
                console.log(err)

            })
    }

    const menuitems = <>
        <li>
            <Link to={`/about/${user?.email}`} className="justify-between">
                About
                <span className="badge">user</span>
            </Link>
        </li>
        <li><Link to='/'>Settings</Link></li>
        {
            user?.email ?
                <li><button onClick={handlelogout}>logout</button></li>
                :
                <li><Link to='/auth/login'>Login</Link></li>
        }
    </>



    fetch(`https://notebook-server.vercel.app/profile/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            console.log()
            setProfile(result)
        })


    return (
        <div>
            <div className="navbar bg-gray-600">

                <div className="flex-1 navbar-start">
                    <Link to='/' className="text-white normal-case lg:text-2xl"><span className='text-lime-400 font-extrabold lg:text-4xl'>N</span>oteBook</Link>
                </div>

                <div className='navbar-center  grid grid-flow-col gap-4 lg:gap-6 px-3 py-1 rounded-lg'>
                    <Link to='/' className=' rounded-full hover:bg-gray-500 p-1'><FaHome title='home' className='text-white lg:text-3xl'></FaHome></Link>
                    <Link to='/inbox' className=' rounded-full hover:bg-gray-500 p-1'>
                        <BsMessenger title='inbox' className='text-white lg:text-3xl'></BsMessenger></Link>
                    <Link to='/notifications' className=' rounded-full hover:bg-gray-500 p-1'>
                        <FaBell title='notification' className='text-white lg:text-3xl'></FaBell></Link>

                    <Link to='/media' className=' rounded-full hover:bg-gray-500 p-1'>
                        <MdPermMedia title='media' className='text-white lg:text-3xl'></MdPermMedia></Link>

                </div>

                <div className="flex-none lg:navbar-end">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    profile[0]?.image ?
                                        <img title='Account' src={profile[0]?.image} alt='profilePicture' />
                                        :
                                        <img title='Account' src={img} alt='imgsymbol' />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuitems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;