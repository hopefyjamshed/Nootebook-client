import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/Authprovider';

const AboutForm = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, resetField } = useForm();

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

                    const profileData = {
                        image: img,
                        college: data.college,
                        email: user?.email,
                        name: user?.displayName,
                        address: data.address
                    }
                    console.log(profileData)


                    fetch('http://localhost:5000/profile', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profileData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('profileData successfully posted!')

                            navigate(`/about/${user?.emil}`)
                        })

                }
            });

    }
    return (
        <div className='mt-12 mb-32 p-9 border shadow-2xl rounded-2xl'>
            <form onSubmit={handleSubmit(handleUpload)}>
                {/* textarea  */}
                <p className='text-2xl font-bold'>Your Address</p>
                <input type="text" name='address' placeholder="Your Address" {...register('address')} className="input input-bordered w-full max-w-xs" />

                <p className='text-2xl font-bold'>Your College</p>
                <input type="text" name='college' placeholder="Your College" {...register('college')} className="input input-bordered w-full max-w-xs" />
                <hr className='mt-5' />
                {/* photo field  */}
                <p className='text-3xl font-bold'>Profile Picture</p>
                <input name='photo' {...register('photo')} type="file" className='bg-lime-500 rounded-full mt-3' placeholder='Photo' />
                <input className='btn mt-5 w-full lg:w-32 lg:ml-8 bg-slate-400' type="submit" value="Post" />
            </form>
        </div>
    );
};

export default AboutForm;