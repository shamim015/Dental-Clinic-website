import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("../services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className="home-container container mb-5">
            <h1 className="p-5 text-primary  text">Our Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service =>
                    <Service
                        key={service.id}
                        service={service}
                    ></Service>
                )}
            </div>
        </div>
    );
};

export default Services;