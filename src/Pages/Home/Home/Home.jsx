import React from 'react';
import Hero from '../Hero/Hero';
import Community from '../Community/Community';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <Community></Community>
            
        </div>
    );
};

export default Home;