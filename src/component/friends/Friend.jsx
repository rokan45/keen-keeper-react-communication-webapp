import React from 'react';
import { Link } from 'react-router';

const Friend = ({ friend }) => {

    const {id, name, picture, days_since_contact, status, tags } = friend
    return (
        <Link to={`/friends/${id}`} className='p-4 shadow-md '>
            <div> <img className='rounded-[1000px] flex items-center justify-center mx-auto' src={picture} alt={name} width={'100px'} height={'100px'} /></div>
            <h2 className='text-sm font-bold text-center mt-2'>{name}</h2>
            <p className='text-sm text-gray-500 text-center mt-1'>{days_since_contact} ago</p>
            <div className='flex items-center justify-center mt-2 gap-1.5'>
                {
                    tags.map((tag,index) => <span key={index} className='bg-green-100 text-sm rounded-2xl px-2'>{tag}</span>)
                }
            </div>
           <button className={`flex items-center justify-center mx-auto mt-3 px-2 text-white text-sm rounded-2xl ${status==='on-track'?"bg-[#244d3f]":''} ${status==='almost due'?"bg-orange-200":''} ${status==='overdue'?"bg-red-200":''}`}>{status}</button>

        </Link>
    );
};

export default Friend;