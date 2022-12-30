import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiDetail } from 'react-icons/bi';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import Loading from '../../shares/loading/Loading';
import CommentCard from './CommentCard';
import img from '../../../assets/images/profileimg.jpg'


const DetailCard = () => {

    const [active, setActive] = useState(false);
    const [likes, setLikes] = useState([])
    const [profile, setProfile] = useState([])
    const [comment, setComment] = useState([])
    const data = useLoaderData()
    const { caption, _id, image, email } = data[0]
    const { user, loading } = useContext(AuthContext)

    fetch(`https://notebook-server.vercel.app/profile/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            console.log()
            setProfile(result)
            if (loading) {
                return <Loading></Loading>
            }
        })

    const handlecomment = (event) => {
        event.preventDefault()
        const form = event.target
        const comment = form.comment.value
        console.log(comment)
        const commentData = {
            comment: comment,
            email: user?.email,
            id: _id,
            user: user?.displayName,
        }


        fetch('https://notebook-server.vercel.app/comment', {
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
                if (loading) {
                    return <Loading></Loading>
                }
            })


    }



    fetch(`https://notebook-server-hopefyjamshed.vercel.app/comment/${_id}`)
        .then(res => res.json())
        .then(result => {

            setComment(result)
            if (loading) {
                return <Loading></Loading>
            }
        })



    // add like to database 
    const handlelike = (id) => {

        setActive(!active);

        const likeData = {
            email: user?.email,
            number: _id,
            user: user?.displayName,
        }
        console.log(likeData)
        // adding like to database 

        fetch('https://notebook-server-hopefyjamshed.vercel.app/like', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeData)
        })
            .then(res => res.json())
            .then(result => {

                toast.success('like added successfully')
                if (loading) {
                    return <Loading></Loading>
                }
            })
    }

    fetch(`https://notebook-server-hopefyjamshed.vercel.app/likes/${_id}`)
        .then(res => res.json())
        .then(result => {

            setLikes(result)
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
                                {
                                    profile[0]?.image
                                        ?
                                        <img src={profile[0]?.image} alt='profilepicture' />
                                        :
                                        <img src={img} alt='imglogo' />
                                }
                            </div>
                        </div>
                        <h2 className="card-title ml-2 text-white">{user?.displayName}</h2>
                    </div>
                    <p className='text-white'>{caption}</p>
                </div>
                <figure><img src={image} className=' h-96 w-96 rounded-lg' alt="uploadedPhoto" /></figure>
                <div className=' card-footer'>
                    <div className='flex mt-4 justify-between text-white text-xl px-5'>
                        <p>{likes.length} {
                            likes.length > 1 ?
                                "likes"
                                : "like"}</p>



                        <p>{comment.length}{
                            comment.length > 1 ?
                                "comments"
                                : "comment"}</p>
                    </div>
                    <hr className='mt-3' />
                    <div className='flex mt-3 justify-between px-12'>


                    </div>

                    {/* comment div  */}
                    <h1 className='text-3xl mb-3 mt-6 font-bold text-white'>Comments</h1>
                    <div className='py-4 px-3'>
                        <form className='flex' onSubmit={handlecomment}>
                            <textarea name='comment' className="textarea textarea-bordered textarea-ghost text-xl text-white w-full border-white" placeholder="Write a comment">

                            </textarea>
                            <input className='btn' type="submit" value="Post" />
                        </form>
                    </div>
                    <div className='mt-9'>


                        {
                            comment?.map(com => <CommentCard
                                key={com._id}
                                com={com}
                            ></CommentCard>)
                        }




                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailCard;