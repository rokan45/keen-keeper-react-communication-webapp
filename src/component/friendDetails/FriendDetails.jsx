import React from 'react';
import { FaArchive, FaTrashAlt, FaVideo } from 'react-icons/fa';
import { IoMdText, IoMdTime } from 'react-icons/io';
import { MdAddCall } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {

    // const {id}=useParams();

    const friendData=useLoaderData();
    console.log(friendData);



    return (
        <div>
            <div class="min-h-screen bg-gray-50 p-6 md:p-10 font-sans text-gray-800">
                <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">

                    <aside class="flex flex-col gap-6">

                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <img src=" " alt=" " class="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-md"/>

                                <h1 class="text-xl font-extrabold text-[#0f2a3d] mb-2">Emma Wilson</h1>
                                <div class="flex gap-2 mb-4">
                                    <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wide">Overdue</span>
                                    <span class="px-3 py-1 bg-[#1a4336] text-white rounded-full text-xs font-medium">Family</span>
                                </div>

                                <p class="text-sm text-gray-500 italic max-w-xs mb-1 leading-relaxed">
                                    "Former colleague, great mentor"
                                </p>
                                <span class="text-xs text-gray-400">Preferred: email</span>
                        </div>

                        <div class="flex flex-col gap-3">
                            <button class="flex items-center justify-center gap-2 w-full bg-white text-[#1a4336] px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                               <IoMdTime/>
                                Snooze 2 Weeks
                            </button>
                            <button class="flex items-center justify-center gap-2 w-full bg-white text-gray-700 px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                              <FaArchive/>
                                Archive
                            </button>
                            <button class="flex items-center justify-center gap-2 w-full bg-white text-red-600 px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:bg-red-50 transition-colors">
                                <FaTrashAlt/>
                                Delete
                            </button>
                        </div>

                    </aside>

                    <main class="flex flex-col gap-8">

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                <span class="text-5xl font-extrabold text-[#1a4336] mb-1">62</span>
                                <span class="text-sm text-gray-400 font-medium">Days Since Contact</span>
                            </div>
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                <span class="text-5xl font-extrabold text-[#1a4336] mb-1">30</span>
                                <span class="text-sm text-gray-400 font-medium">Goal (Days)</span>
                            </div>
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                <span class="text-3xl font-extrabold text-[#1a4336] mb-1">Feb 27, 2026</span>
                                <span class="text-sm text-gray-400 font-medium">Next Due</span>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-col gap-6">
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grow">
                                <div class="flex justify-between items-center mb-4">
                                    <h2 class="text-lg font-bold text-[#0f2a3d]">Relationship Goal</h2>
                                    <button class="btn text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">Edit</button>
                                </div>
                                <p class="text-sm text-gray-600 leading-relaxed">
                                    Connect every <span class="text-lg font-semibold text-gray-800">30 days</span>
                                </p>
                            </div>

                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[320px]">
                                <h2 class="text-lg font-bold text-[#0f2a3d] mb-4">Quick Check-In</h2>
                                <div class="grid grid-cols-3 gap-3">
                                    <button class="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-[#1a4336]">
                                       <MdAddCall/>
                                        <span class="text-xs font-medium">Call</span>
                                    </button>
                                    <button class="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-[#1a4336]">
                                       <IoMdText/>
                                        <span class="text-xs font-medium">Text</span>
                                    </button>
                                    <button class="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-[#1a4336]">
                                       <FaVideo/>
                                        <span class="text-xs font-medium">Video</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div class="flex justify-between items-center mb-6">
                                <h2 class="text-lg font-bold text-[#0f2a3d]">Recent Interactions</h2>
                                <button class="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-md hover:bg-gray-200 font-medium">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Full History
                                </button>
                            </div>

                            <div class="flex flex-col divide-y divide-gray-100">

                                <div class="flex justify-between items-center py-5">
                                    <div class="flex gap-4 items-center">
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold text-gray-800">Text</span>
                                            <span class="text-xs text-gray-500">Asked for career advice</span>
                                        </div>
                                    </div>
                                    <span class="text-xs text-gray-400 font-medium">Jan 28, 2026</span>
                                </div>

                                <div class="flex justify-between items-center py-5">
                                    <div class="flex gap-4 items-center">
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-1a2 2 0 01-2-2v-.935M14 11a2 2 0 012-2h1a2 2 0 012 2v1"></path></svg>
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold text-gray-800">Meetup</span>
                                            <span class="text-xs text-gray-500">Industry conference meetup</span>
                                        </div>
                                    </div>
                                    <span class="text-xs text-gray-400 font-medium">Jan 28, 2026</span>
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