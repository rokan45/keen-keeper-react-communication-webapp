import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Homepage from "../component/home/Homepage";
import TimelinePage from "../component/timeline/TimelinePage";
import StatPage from "../component/stat/StatPage";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                index:true, 
                element:<Homepage/>
            },
            {
                path:"timeline",
                element:<TimelinePage></TimelinePage>
            },
            {
                path:'stats',
                element:<StatPage></StatPage>
            }

        ]
    }
]);