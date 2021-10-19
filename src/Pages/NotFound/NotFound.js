import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/404.png'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '50%' }} src={notfound} alt="" />

        </div>
    );
};

export default NotFound;