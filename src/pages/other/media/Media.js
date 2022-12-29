import { useQuery } from '@tanstack/react-query';

import React from 'react';
import MediaCard from './MediaCard';
import Sidebar from './Sidebar';

const Media = () => {
    const url = 'https://notebook-server.vercel.app/uploaded'
    const { data, refetch } = useQuery({
        queryKey: ['uploadedData'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()

            return data
        }
    })

    console.log(data)
    return (
        <div className=' lg:flex gap-4 my-8'>
            <div className='lg:w-1/2 mb-5'>
                <Sidebar></Sidebar>
            </div>
            <div className='lg:w-1/2'>
                {
                    data?.map(da => <MediaCard
                        key={da._id}
                        da={da}
                    ></MediaCard>)
                }
            </div>

        </div>
    );
};

export default Media;