import React from 'react';
import { LuContactRound } from 'react-icons/lu';



const EmptyList = () => {
    return (
        <div className='mx-10 flex flex-col justify-center border-2 border-gray-300  items-center px-15 py-22 bg-gray-50 rounded-2xl mt-10'>
            <div className='mt-5'><LuContactRound className='text-6xl text-gray-300 *:' /></div>
            <h2 className='text-lg  font-bold text-gray-400 mt-2'>Your interaction History is empty!</h2>
        </div>
    );
};

export default EmptyList;