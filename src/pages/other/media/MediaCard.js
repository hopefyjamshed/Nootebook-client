import React, { useContext, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
import { BiDetail, BiMessageAlt } from "react-icons/bi";
import { toast } from 'react-hot-toast';
import img from '../../../assets/images/profileimg.jpg'
import Loading from '../../shares/loading/Loading';

const MediaCard = ({ da }) => {
    const [active, setActive] = useState(false);
    const [profile, setProfile] = useState([])
    const [comment, setComment] = useState([])
    const [likes, setLikes] = useState([])
    const { user, loading } = useContext(AuthContext)
    const { email, image, caption, _id } = da

    fetch(`https://notebook-server.vercel.app/profile/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            console.log()
            setProfile(result)
        })



    // adding like to database 
    const handlelike = (id) => {

        setActive(!active);

        const likeData = {
            email: user?.email,
            number: _id,
            user: user?.displayName,
        }
        console.log(likeData)
        // adding like to database 

        fetch('http://localhost:5000/like', {
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

    fetch(`http://localhost:5000/comment/${_id}`)
        .then(res => res.json())
        .then(result => {

            setComment(result)
            if (loading) {
                return <Loading></Loading>
            }
        })

    fetch(`http://localhost:5000/likes/${_id}`)
        .then(res => res.json())
        .then(result => {

            setLikes(result)
            if (loading) {
                return <Loading></Loading>
            }
        })




    return (
        <div>
            <div className="card mb-5 bg-gray-700 shadow-xl">

                <div className="card-body">
                    <div className='flex'>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                {
                                    profile[0]?.image ?
                                        <img src={profile[0]?.image} alt='profilepicure' />
                                        :
                                        <img src={img} alt='imglogo' />
                                }
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
                        <button onClick={() => handlelike(_id)} className='btn' style={{ backgroundColor: active ? "lime" : "black" }}><FaThumbsUp className=' text-3xl text-white'></FaThumbsUp> <span className='text-xl ml-1'>Like</span></button>



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