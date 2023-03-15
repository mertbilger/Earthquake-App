import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './contact';

const RootLayout = () => {
    return (
        <>
            <Header />           
            <Outlet />
            <Contact/>
            <Footer/>
            
        </>


    )
}

export default RootLayout;