import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';

const Sidebar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>


            <div class="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-2xl font-bold leading-none text-gray-900 dark:text-white">users around you</h5>
                    <Link to='' class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </Link>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    {user?.photoURL}
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-xl font-medium text-gray-900 truncate dark:text-white">
                                        {user?.displayName}
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {user?.email}
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Sidebar;