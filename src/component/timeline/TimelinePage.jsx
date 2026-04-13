import React, { useContext } from 'react';
import { FriendContext } from '../../context/ContextProvider';

const TimelinePage = () => {

    const {
        storeCallInfo,
        storeTextInfo,
        storeVideoInfo, } = useContext(FriendContext);

    console.log(storeCallInfo);


    return (
        <div class="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
            <div class="max-w-4xl mx-auto">

                <header class="mb-8">
                    <h1 class="text-4xl font-extrabold text-[#0f2a3d] mb-6">Timeline</h1>

                    <div class="relative inline-block text-left">
                        <select class="appearance-none bg-white border border-gray-200 text-gray-400 text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-[#1a4336]/20 cursor-pointer shadow-sm">
                            <option>Filter timeline</option>
                            <option>Meetups</option>
                            <option>Calls</option>
                            <option>Texts</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </header>

                <div class="flex flex-col gap-4">

                    <div>
                        {
                            storeCallInfo.map((call, index) => <div key={index} class="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_3px_6px_0_rgba(0,0,0,0.05)] flex items-center gap-4 hover:translate-x-1 transition-transform cursor-pointer">
                                <div class="text-2xl">🤝</div>
                                <div class="flex flex-col">
                                    <p class="text-sm font-medium text-gray-500">
                                        <span class="text-[#0f2a3d] font-bold">Meetup</span>  {call.name}
                                    </p>
                                    <span class="text-xs text-gray-400 mt-1">{call.interactionTime}</span>
                                </div>
                            </div>)
                        }
                    </div>

                    <div>
                        {
                            storeTextInfo.map((text, index) => <div key={index} class="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_3px_6px_0_rgba(0,0,0,0.05)] flex items-center gap-4 hover:translate-x-1 transition-transform cursor-pointer">
                                <div class="text-2xl">💬</div>
                                <div class="flex flex-col">
                                    <p class="text-sm font-medium text-gray-500">
                                        <span class="text-[#0f2a3d] font-bold">Text</span>  {text.name}
                                    </p>
                                    <span class="text-xs text-gray-400 mt-1">{text.interactionTime}</span>
                                </div>
                            </div>)
                        }
                    </div>

                    <div>
                        {
                            storeVideoInfo.map((video,index) => <div key={index} class="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_3px_6px_0_rgba(0,0,0,0.05)] flex items-center gap-4 hover:translate-x-1 transition-transform cursor-pointer">
                                <div class="text-2xl">📹</div>
                                <div class="flex flex-col">
                                    <p class="text-sm font-medium text-gray-500">
                                        <span class="text-[#0f2a3d] font-bold">Video</span>  {video.name}
                                    </p>
                                    <span class="text-xs text-gray-400 mt-1">{video.interactionTime}</span>
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