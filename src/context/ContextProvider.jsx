import React, { createContext, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const FriendContext = createContext();

const ContextProvider = ({ children }) => {

    // state to handle call history
    const [storeCallInfo, setStoreCallInfo] = useState([]);

    // using state to handle text history
    const [storeTextInfo, setStoreTextInfo] = useState([]);

    // using state to handle video call history
    const [storeVideoInfo, setStoreVideoInfo] = useState([]);


    
    // function to handle call button event
    const handlleCallBtn = ({currentFriend}) => {

        setStoreCallInfo([...storeCallInfo,currentFriend]);

    }


    //function to handle text button event
    const handlleTextBtn = ({currentFriend}) => {
        setStoreTextInfo([...storeTextInfo,currentFriend]);

    }

    //function to handle video call butiton event
    const handlleVideoCallBtn = ({currentFriend}) => {
        setStoreVideoInfo([...storeVideoInfo,currentFriend]);
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
    };
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default ContextProvider;