import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../Images/banner/banner1.jpg'
import banner2 from '../../../Images/banner/banner2.jpg'
import banner3 from '../../../Images/banner/banner3.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div
                        style={{}}
                    >
                        <h1>The Modern Dentistry You've Been Missing</h1>
                        <h5>Our doctors are committed to helping you look, feel and smile your best.</h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 img"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>We Offer Full-Scale Services You Need!</h1>
                    <h5>If you are looking for a great place to smile look no futher than Dental Clinic</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Complete Oral Health Starts Here & Now!</h1>
                    <h5>If you have any worries, concerns, or question about visiting a dentist, please give us a call! </h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;