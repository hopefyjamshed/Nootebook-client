import React, { useState } from 'react';
import img from '../../../assets/images/profileimg.jpg'

const CommentCard = ({ com }) => {
    const [profile, setProfile] = useState([])
    const { comment, _id, user, email } = com
    fetch(`https://notebook-server.vercel.app/profile/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            console.log()
            setProfile(result)
        })
    return (
        <div>

            <div className="chat chat-start">
                <div className="chat-image w-10 avatar">
                    <div className="w-32 rounded-full">
                        {
                            profile[0]?.image
                                ?
                                <img src={profile[0]?.image} alt='profilepicture' />
                                :
                                <img src={img} alt='imglogo' />
                        }
                    </div>
                </div>
                <div className="chat-bubble bg-gray-500 text-2xl">
                    <p className='text-xl font-bold'>{user}</p>
                    <p>{comment}</p></div>
            </div>

        </div>
    );
};

export default CommentCard;