import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiDetail } from 'react-icons/bi';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import Loading from '../../shares/loading/Loading';
import CommentCard from './CommentCard';

const DetailCard = () => {
    const [comment, setComment] = useState([])
    const data = useLoaderData()
    const { caption, _id, image, email } = data[0]
    const { user, loading } = useContext(AuthContext)


    const handlecomment = (event) => {
        event.preventDefault()
        const form = event.target
        const comment = form.comment.value
        console.log(comment)
        const commentData = {
            comment: comment,
            email: user?.email,
            user: user?.displayName,
        }


        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('comment posted successfully!')
                form.reset()
            })
    }

    fetch('http://localhost:5000/comment')
        .then(res => res.json())
        .then(result => {

            setComment(result)
            if (loading) {
                return <Loading></Loading>
            }
        })

    return (
        <div>


            <div className="card mb-5 p-5 bg-gray-700 shadow-xl">

                <div className="card-body">
                    <div className='flex'>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>
                        <h2 className="card-title ml-2 text-white">{user?.displayName}</h2>
                    </div>
                    <p className='text-white'>{caption}</p>
                </div>
                <figure><img src={image} className=' h-96 w-96 rounded-lg' alt="uploadedPhoto" /></figure>
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

                    {/* comment div  */}
                    <h1 className='text-3xl mb-3 mt-6 font-bold text-white'>Comments</h1>
                    <div className='mt-9'>
                        {
                            comment?.map(com => <CommentCard
                                key={com._id}
                                com={com}
                            ></CommentCard>)
                        }
                    </div>



                    <div className='py-4 px-3'>
                        <form className='flex' onSubmit={handlecomment}>
                            <textarea name='comment' className="textarea textarea-bordered textarea-ghost text-xl text-white w-full border-white" placeholder="Write a comment">

                            </textarea>
                            <input className='btn' type="submit" value="Post" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailCard;