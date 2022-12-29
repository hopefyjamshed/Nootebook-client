import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';

const MediaCard = ({ da }) => {
    const { user } = useContext(AuthContext)
    const { email, image, caption, _id } = da
    return (
        <div>
            <div className="card  bg-gray-700 shadow-xl">

                <div className="card-body">
                    <div className='flex'>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <h2 className="card-title ml-2 text-white">{user?.displayName}</h2>
                    </div>
                    <p className='text-white'>{caption.length > 50
                        ? <p>{caption.slice(0, 50) + '...'}<Link to=''>read more</Link></p>
                        : <p>{caption}</p>}</p>
                </div>
                <figure><img src={image} className=' h-96 w-3/4 rounded-lg' alt="uploadedPhoto" /></figure>
                <div className=' card-footer'>
                    <hr className='mt-5' />
                    <h1>hey buddy</h1>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;