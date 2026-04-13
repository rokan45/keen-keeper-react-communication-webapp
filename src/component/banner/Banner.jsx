import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Banner = () => {
    const stats = [
        { label: 'Total Friends', value: 10 },
        { label: 'On Track', value: 3 },
        { label: 'Need Attention', value: 6 },
        { label: 'Interactions This Month', value: 12 },
    ];

    return (
        <div className="bg-gray-50 py-16 px-4 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2a3d] mb-4">
                    Friends to keep close in your life
                </h1>

                {/* message */}
                <p className="text-gray-500 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                {/* Add Friend Button */}
                <button className="flex items-center gap-2 bg-[#1a4336] hover:bg-[#245a48] text-white px-6 py-3 rounded-md font-semibold transition-all mb-16">
                    <BiPlus/>
                    Add a Friend
                </button>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-transform hover:scale-105"
                        >
                            <span className="text-4xl font-bold text-[#1a4336] mb-2">
                                {stat.value}
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Banner;