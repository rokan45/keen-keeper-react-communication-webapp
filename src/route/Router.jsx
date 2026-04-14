import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Homepage from "../component/home/Homepage";
import TimelinePage from "../component/timeline/TimelinePage";
import StatPage from "../component/stat/StatPage";
import FriendDetails from "../component/friendDetails/FriendDetails";
import { Suspense } from "react";
import ErrorPage from "../eroor/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: '/friends/:id',
                element: <Suspense fallback={<span className="loading loading-bars mx-auto flex justify-center items-center loading-xl"></span>}>
                    <FriendDetails></FriendDetails>
                </Suspense>,
                loader: () => fetch('/friends.json'),
            },
            {
                path: "timeline",
                element: <TimelinePage></TimelinePage>
            },
            {
                path: 'stats',
                element: <StatPage></StatPage>
            }

        ],
        errorElement:<ErrorPage></ErrorPage>
    }
]);