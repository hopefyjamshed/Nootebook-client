import React from 'react';

const CommentCard = ({ com }) => {
    const { comment, _id, user, email } = com
    return (
        <div>

            <div className="chat chat-start">
                <div className="chat-image w-10 avatar">
                    <div className="w-32 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
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