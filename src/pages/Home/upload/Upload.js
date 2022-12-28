import React, { useState } from 'react';

const Upload = () => {
    const [upload, setUpload] = useState('')

    const handleUpload = event => {
        event.preventDefault()
        const form = event.target
        const photo = form.photo.value
        const text = form.text.value
        console.log('photo', photo, 'text', text)
        const uplodedData = {
            photo: photo,
            text: text
        }
        console.log(uplodedData)
    }
    return (
        <div className='mt-10'>
            <div className="card w-full bg-gray-600 shadow-xl">
                <div className="card-body">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>

                    {/* upload form  */}
                    <form onSubmit={handleUpload}>
                        {/* textarea  */}
                        <textarea name='text' className="textarea mb-3 w-full text-xl rounded-none textarea-white" placeholder="What's in your mind?"></textarea>
                        <hr />
                        {/* photo field  */}
                        <input name='photo' type="file" className='bg-lime-500 rounded-full mt-3' placeholder='Photo' />
                        <input className='btn' type="submit" value="Post" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Upload;