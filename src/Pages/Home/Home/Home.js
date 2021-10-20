import React from 'react';
import Doctors from '../../Doctors/Doctors/Doctors';
import Services from '../../Services/Services';
import ServiceDetails from '../../ServiceDetails/SeviceDetails/ServiceDetails';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;