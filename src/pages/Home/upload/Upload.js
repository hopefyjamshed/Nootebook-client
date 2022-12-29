import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';


const Upload = () => {
    const navigate = useNavigate()
    const [showEmojis, setShowEmojis] = useState(false);
    const [upload, setUpload] = useState('')
    const { register, formState: { errors }, handleSubmit, resetField } = useForm();
    const { user } = useContext(AuthContext)
    const imghostkey = process.env.REACT_APP_imgbb_key;


    const handleUpload = data => {
        const image = data?.photo[0];
        const imageHostingKey = process.env.REACT_APP_imgbb_key;
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(imageInfo => {
                if (imageInfo?.success) {
                    const img = imageInfo?.data?.url;

                    const uploadData = {
                        image: img,
                        caption: data.text,
                        email: user?.email
                    }
                    console.log(uploadData)


                    fetch('http://localhost:5000/upload', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(uploadData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('successfully posted!')
                            navigate('/media')
                        })

                }
            });

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
                        <textarea name='text' {...register('text')} className="textarea mb-3 w-full text-2xl rounded-none textarea-white" placeholder={`what's in your mind ${user?.displayName}?`}></textarea>
                        <hr />
                        {/* photo field  */}
                        <input name='photo' {...register('photo')} type="file" className='bg-lime-500 rounded-full mt-3' placeholder='Photo' />
                        <input className='btn ml-8 bg-slate-400' type="submit" value="Post" />
                    </form>


                </div>
            </div>
        </div >
    );
};

export default Upload;