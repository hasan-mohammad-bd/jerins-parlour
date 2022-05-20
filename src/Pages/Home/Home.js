import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Services from './Services';

const Home = () => {
    return (
        <div className='container mx-auto'>

            <Hero></Hero>
            <Services></Services>
        </div>
    );
};

export default Home;