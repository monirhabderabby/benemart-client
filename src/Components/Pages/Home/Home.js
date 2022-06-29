import React from 'react';
import BNavbar from '../../Shared/BNavbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';
import FlashDeals from './FlashDeals';

const Home = () => {
    return (
        <div className='bg-secondary'>
            <BNavbar />
            <Banner />
            <FlashDeals />
            <Footer />

        </div>
    );
};

export default Home;