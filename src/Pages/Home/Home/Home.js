import React from 'react';
import Login from '../../Login/Login/Login';
import Services from '../../Services/Services';
import ServiceDetails from '../../ServicesDetails/ServiceDetails';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Services></Services>
            <ServiceDetails></ServiceDetails>
        </div>
    );
};

export default Home;