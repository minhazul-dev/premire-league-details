import React from 'react';
import { Image } from 'react-bootstrap';
import nImage from '../Images/not found.jpg';

const NotFound = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center text-danger">Please Use Proper Links</h2>

            <div className="container mt-5">
            <Image src={nImage} fluid />
            </div>
        </div>
    );
};

export default NotFound;