import { FaGraduationCap, FaPenAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { MdEmail, MdLocationOn } from "react-icons/md";

const About = () => {
    const about = useLoaderData()
    const { address, college, image, name, _id, email } = about[0]

    return (
        <div className='bg-gray-600'>


            {/* profile card  */}


            <div className="w-full p-7 mb-12 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </button>

                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                        <ul className="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt={name} />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                    <div className="flex mt-4 space-x-3 md:mt-6">


                        <Link className='btn' to='/aboutform'>Add Your Profile Info</Link>

                        <button className='btn btn-primary'><FaPenAlt className='mr-1'></FaPenAlt> Edit Profile</button>
                    </div>
                </div>
                <hr className=' font-body my-3' />
                <p className='text-2xl'><FaGraduationCap className='text-3xl inline'></FaGraduationCap> Studied at <span className=' font-bold'>{college}</span> </p>
                <hr className=' font-body my-3' />
                <p className='text-2xl'><MdLocationOn className='text-3xl inline'></MdLocationOn> Address <span className=' font-bold'>{address}</span></p>
                <hr className=' font-body my-3' />
                <p className='text-2xl'><MdEmail className='text-3xl inline'></MdEmail> Email <span className=' font-bold'>{email}</span></p>

            </div>


        </div>
    );
};

export default About;