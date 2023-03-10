import React from 'react';
import { FaNeos } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>

            <footer className="p-4  left-0 right-0  max-w-[1440px] mx-auto rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex text-white sm:items-center sm:justify-between">
                    <a className=" normal-case text-2xl text-black dark:text-white"><span className='text-lime-400 font-extrabold text-4xl'>N</span>oteBook</a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Notebook™</a>. All Rights Reserved.
                </span>
            </footer>

        </div>
    );
};

export default Footer;