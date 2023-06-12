import React from 'react';
import Hero from '../Hero/Hero';
import Community from '../Community/Community';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructor/popularInstructors';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Community></Community>
            
        </div>
    );
};

export default Home;