import React, { useContext } from 'react';
import { FriendContext } from '../../context/ContextProvider';
import { MdAddCall } from 'react-icons/md';
import { IoMdText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';

const TimelinePage = () => {

    const { allinteraction } = useContext(FriendContext);


    console.log(allinteraction);


    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto">

                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-[#0f2a3d] mb-6">Timeline</h1>

                    <div className="relative inline-block text-left">
                        {/* Sorting Interaction */}
                        <select className="appearance-none bg-white border border-gray-200 text-gray-400 text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-[#1a4336]/20 cursor-pointer shadow-sm">
                            <option>Filter timeline</option>
                            <option>Meetups</option>
                            <option>Calls</option>
                            <option>Texts</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col gap-10">

                    <div>
                        {
                            allinteraction.map((info, index) => <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_3px_6px_0_rgba(0,0,0,0.05)] flex items-center gap-5 mt-5 hover:translate-x-1 transition-transform cursor-pointer">

                                {/* dynamic icon according to interaction */}
                                <div className="text-2xl">{info.interactionType === 'Call' ? <MdAddCall /> : ''}{info.interactionType === 'Text' ? <IoMdText /> : ''} {info.interactionType === 'Video' ? <FaVideo /> : ''} </div>

                                {/* Text info according to interation */}
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-gray-500">
                                        <span className="text-[#0f2a3d] ">Meetup </span> <span className='font-bold text-black'>{info.name}</span>
                                    </p>
                                    <span className="text-xs text-gray-400 mt-1">{info.interactionTime}</span>
                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TimelinePage;