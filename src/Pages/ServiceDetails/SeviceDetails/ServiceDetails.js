import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {


    const { serviceId } = useParams();
    return (
        <div style={{
            padding: '200px',
            backgroundColor: 'khaki',
            color: 'blue'
        }}>
            <h2> Service Details : {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;