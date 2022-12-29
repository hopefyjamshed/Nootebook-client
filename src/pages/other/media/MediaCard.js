import React, { useContext } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import { BiDetail, BiMessageAlt } from "react-icons/bi";
import { toast } from 'react-hot-toast';

const MediaCard = ({ da }) => {
    const { user } = useContext(AuthContext)
    const { email, image, caption, _id } = da

    // const handlecomment = (event) => {
    //     event.preventDefault()
    //     const form = event.target
    //     const comment = form.comment.value
    //     console.log(comment)
    //     const commentData = {
    //         comment: comment,
    //         email: user?.email,
    //         user: user?.displayName,
    //     }


    //     fetch('http://localhost:5000/comment', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(commentData)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             toast.success('comment posted successfully!')
    //             form.reset()
    //         })
    // }
    return (
        <div>
            <div className="card mb-5 bg-gray-700 shadow-xl">

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
                    <div className='flex mt-4 justify-between text-white text-xl px-5'>
                        <p>Likes</p>
                        <p>comments</p>
                    </div>
                    <hr className='mt-3' />
                    <div className='flex mt-3 justify-between px-12'>
                        <button className='btn'><FaThumbsUp className='text-white text-3xl'></FaThumbsUp> <span className='text-xl ml-1'>Like</span></button>

                        <Link to={`/detail/${_id}`} className='btn'><BiDetail className='text-white text-3xl'></BiDetail><span className='text-xl text-white ml-1'>Detail</span></Link>


                    </div>
                    <div className='py-4 px-3'>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MediaCard;