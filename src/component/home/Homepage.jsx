import React, { Suspense } from 'react';
import Banner from '../banner/Banner';
import Friends from '../friends/Friends';

const friendsData = fetch('/friends.json').then(res => res.json());
console.log(friendsData);

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>

            {/* Friend  card component */}
            <Suspense fallback={<span className="loading loading-bars mx-auto flex justify-center items-center loading-xl"></span>}>

                <Friends friendsData={friendsData}></Friends>
            </Suspense>

        </div>
    );
};

export default Homepage;