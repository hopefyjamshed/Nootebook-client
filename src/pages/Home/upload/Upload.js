import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/Authprovider/Authprovider';

const Upload = () => {
    const [upload, setUpload] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)

    const imghostkey = process.env.REACT_APP_imgbb_key

    const handleUpload = data => {
        const photo = data.photo[0]
        const formData = new FormData();
        formData.append('photo', photo)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imghostkey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
            })
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
                    <form onSubmit={handleSubmit(handleUpload)}>
                        {/* textarea  */}
                        <textarea name='text' {...register('text')} className="textarea mb-3 w-full text-xl rounded-none textarea-white" placeholder="What's in your mind?"></textarea>
                        <hr />
                        {/* photo field  */}
                        <input name='photo' {...register('photo')} type="file" className='bg-lime-500 rounded-full mt-3' placeholder='Photo' />
                        <input className='btn' type="submit" value="Post" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Upload;