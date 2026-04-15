import React, { createContext, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoMdText } from 'react-icons/io';
import { MdAddCall, MdAddIcCall } from 'react-icons/md';
import { toast } from 'react-toastify';


// eslint-disable-next-line react-refresh/only-export-components
export const FriendContext = createContext();

const ContextProvider = ({ children }) => {

    // state to handle call history
    const [storeCallInfo, setStoreCallInfo] = useState([]);

    // using state to handle text history
    const [storeTextInfo, setStoreTextInfo] = useState([]);

    // using state to handle video call history
    const [storeVideoInfo, setStoreVideoInfo] = useState([]);


    // Make a object to store all data info
    const allinteraction = [
        ...storeCallInfo,
        ...storeTextInfo,
        ...storeVideoInfo
    ];



    // function to handle call button event
    const handlleCallBtn = (currentFriend) => {
        // toast on click call button
        toast(`Calling ${currentFriend.name}`, {
            icon: <MdAddCall />,
            position: "top-center",
        });

        const NewCallData = {
            ...currentFriend,
            //customize date format to make it history clean          
            interactionTime: new Date().toLocaleString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).replace(',', ''),
            // to tract the type of data
            interactionType: 'Call'
        };


        setStoreCallInfo([...storeCallInfo, NewCallData]);


    }


    //function to handle text button event
    const handlleTextBtn = (currentFriend) => {
        // toast on click text button
        toast(`Text Sent to ${currentFriend.name}`, {
            icon: <IoMdText />,
            position: "top-center",
        });

        const NewTextData = {
            ...currentFriend,
            //customize date format to make it history clean          
            interactionTime: new Date().toLocaleString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).replace(',', ''),
            // to tract the type of data
            interactionType: 'Text'
        };


        setStoreTextInfo([...storeTextInfo, NewTextData]);
    }

    //function to handle video call butiton event
    const handlleVideoCallBtn = (currentFriend) => {

        // toast on click video call button
        toast(`Calling ${currentFriend.name}`, {
            icon: <FaVideo />,
            position: "top-center",
        });

        const NewVideoCallData = {
            ...currentFriend,
            //customize date format to make it history clean          
            interactionTime: new Date().toLocaleString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).replace(',', ''),
            // to tract the type of data
            interactionType: 'Video'
        };
        setStoreVideoInfo([...storeVideoInfo, NewVideoCallData]);
    }

    const data = {
        handlleCallBtn,
        handlleTextBtn,
        handlleVideoCallBtn,
        storeCallInfo,
        storeTextInfo,
        storeVideoInfo,
        setStoreCallInfo,
        setStoreTextInfo,
        setStoreVideoInfo,
        allinteraction,
    };
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default ContextProvider;