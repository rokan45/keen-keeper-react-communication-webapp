import React, { use } from 'react';
import Friend from './Friend';



const Friends = ({ friendsData }) => {
  
    const friends=use(friendsData);
   

    return (
        <div className='mx-auto p-5 '>
            <h2 className='text-2xl font-semibold ml-3'>Your friends</h2>
            <div className='grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-4'>
                {
                    friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;