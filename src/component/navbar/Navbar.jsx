import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io';
import { RxTimer } from 'react-icons/rx';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-auto px-5 py-5 shadow-sm'>
            {/* This is logo */}
            <div><h1 className='text-3xl font-bold text-black'>Keen<span className='text-green-800'>Keeper</span></h1></div>

            {/* This page navigtion link container */}
            <div className='flex items-center justify-center gap-4 mr-5 text-sm font-bold p-1'>
                
                <div className=''>
                    <NavLink className={'flex items-center gap-1 rounded-sm p-1'} to={'/'}><IoMdHome />Home</NavLink>
                </div>

                <div className=''>
                    <NavLink className={'flex items-center gap-1 rounded-sm p-1'} to={'timeline'}><RxTimer />Timeline</NavLink>
                </div>

                <div className=''>
                    <NavLink className={'flex justify-center items-center gap-1 mr-1 rounded-sm px-2 py-1'} to={'stats'}><ImStatsDots />Stat</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;