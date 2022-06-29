import React from 'react';
import BNavbar from '../../Shared/BNavbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-secondary'>
            <BNavbar />
            <Banner />
            <Footer />
        </div>
    );
};

export default Home;