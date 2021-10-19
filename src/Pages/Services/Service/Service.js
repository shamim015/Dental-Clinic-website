import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css';
const Service = (props) => {
    console.log(props);
    const { courseName, id, name, img, description } = props.service;

    return (
        <div className="col ">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title text-primary">{courseName}</h2>
                    <h3 className="card-text">{name}</h3>
                    <p>{description}</p>
                    <Link to={`/serviceDetails${id}`}>
                        <Button variant="success">For Details</Button>
                    </Link>
                    {/* <Button variant="success">For Details</Button>{" "} */}
                </div>
            </div>
        </div>
    );
};

export default Service;