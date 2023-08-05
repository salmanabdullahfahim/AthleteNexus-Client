import React from 'react';
import Hero from '../Hero/Hero';
import Community from '../Community/Community';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import Faq from '../FAQ/Faq';
import Gallery from '../Gallery/Gallery';



const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <Gallery></Gallery>
            <PopularInstructors></PopularInstructors>
            
            <Community></Community>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;