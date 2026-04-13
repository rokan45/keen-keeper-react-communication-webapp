import React from 'react';
import Navbar from '../component/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';
import ScrollToTop from '../eroor/ScrollToTop';

const Root = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar></Navbar>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;