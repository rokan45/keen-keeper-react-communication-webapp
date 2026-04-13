import { useEffect } from "react";
import { useLocation } from "react-router";


//To force window to scroll every time form the top
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
       
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;