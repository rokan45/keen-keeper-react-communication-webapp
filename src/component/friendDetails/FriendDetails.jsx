import React, { useContext } from 'react';
import { FaArchive, FaTrashAlt, FaVideo } from 'react-icons/fa';
import { IoMdText, IoMdTime } from 'react-icons/io';
import { MdAddCall } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../context/ContextProvider';

const FriendDetails = () => {

    // to get the id reference
    const { id } = useParams();

    // to get the data from loader
    const friendData = useLoaderData();
    // console.log(friendData);


    // extract id data from friedData by finding id
    const selectedFriend = friendData.find(friend => friend.id === Number(id));
    console.log(selectedFriend);

    const { picture, name, bio, status, tags, days_since_contact, goal, next_due_date } = selectedFriend

    const { handlleCallBtn, handlleTextBtn, handlleVideoCallBtn, } = useContext(FriendContext);




    return (
        <div>
            <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans text-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">

                    <aside className="flex flex-col gap-6">

                        {/* friend info */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <img src={picture} alt={name} className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-md" />

                            <h1 className="text-xl font-extrabold text-[#0f2a3d] mb-2">{name}</h1>
                            <div className="flex flex-col gap-2 mb-4">
                                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wide">{status}</span>
                                <div className='flex gap-2'>
                                    {
                                        tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-[#1a4336] text-white rounded-full text-xs font-medium">{tag}</span>)
                                    }
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 italic max-w-xs mb-1 leading-relaxed">
                                {bio}
                            </p>
                            <span className="text-xs text-gray-400">Preferred: email</span>
                        </div>


                        {/* action button */}
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center justify-center gap-2 w-full bg-white text-[#1a4336] px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                                <IoMdTime />
                                Snooze 2 Weeks
                            </button>
                            <button className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                                <FaArchive />
                                Archive
                            </button>
                            <button className="flex items-center justify-center gap-2 w-full bg-white text-red-600 px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:bg-red-50 transition-colors">
                                <FaTrashAlt />
                                Delete
                            </button>
                        </div>

                    </aside>

                    <main className="flex flex-col gap-8">

                        {/* Relationship status container */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                <span className="text-5xl font-extrabold text-[#1a4336] mb-1">{days_since_contact}</span>
                                <span className="text-sm text-gray-400 font-medium">Days Since Contact</span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                <span className="text-5xl font-extrabold text-[#1a4336] mb-1">{goal}</span>
                                <span className="text-sm text-gray-400 font-medium">Goal (Days)</span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                <span className="text-2xl font-extrabold text-[#1a4336] mb-1">{next_due_date}</span>
                                <span className="text-sm text-gray-400 font-medium">Next Due</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-col gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grow">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-bold text-[#0f2a3d]">Relationship Goal</h2>
                                    <button className="btn text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">Edit</button>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Connect every <span className="text-lg font-semibold text-gray-800">{goal} days</span>
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[320px]">
                                <h2 className="text-lg font-bold text-[#0f2a3d] mb-4">Quick Check-In</h2>
                                <div className="grid grid-cols-3 gap-3">

                                    {/* Call button */}
                                    <button onClick={()=>handlleCallBtn(selectedFriend)} className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-[#1a4336]">
                                        <MdAddCall />
                                        <span className="text-xs font-medium">Call</span>
                                    </button>

                                    {/* text button */}
                                    <button onClick={()=>handlleTextBtn(selectedFriend)} className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-[#1a4336]">
                                        <IoMdText />
                                        <span className="text-xs font-medium">Text</span>
                                    </button>

                                    {/* video call button */}
                                    <button onClick={()=>handlleVideoCallBtn(selectedFriend)} className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-[#1a4336]">
                                        <FaVideo />
                                        <span className="text-xs font-medium">Video</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Dummy history container */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-bold text-[#0f2a3d]">Recent Interactions</h2>
                                <button className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-md hover:bg-gray-200 font-medium">
                                    <IoMdTime />
                                    Full History
                                </button>
                            </div>

                            <div className="flex flex-col divide-y divide-gray-100">

                                <div className="flex justify-between items-center py-5">
                                    <div className="flex gap-4 items-center">
                                        <IoMdText />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-gray-800">Text</span>
                                            <span className="text-xs text-gray-500">Asked for career advice</span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium">Jan 28, 2026</span>
                                </div>

                                <div className="flex justify-between items-center py-5">
                                    <div className="flex gap-4 items-center">
                                        <FaVideo />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-gray-800">Meetup</span>
                                            <span className="text-xs text-gray-500">Industry conference meetup</span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium">Jan 28, 2026</span>
                                </div>

                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;