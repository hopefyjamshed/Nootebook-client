import { useQuery } from '@tanstack/react-query';

import React from 'react';
import MediaCard from './MediaCard';
import Sidebar from './Sidebar';

const Media = () => {
    const url = 'http://localhost:5000/uploaded'
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
        <div className='flex'>
            <div className='w-1/2'>
                {
                    data?.map(da => <MediaCard
                        key={da._id}
                        da={da}
                    ></MediaCard>)
                }
            </div>
            <div className='w-1/2'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Media;