import React from 'react';
import { Link } from 'react-router-dom';

const Error404page = () => (
    <div>
        <h1>404 - Not Found!</h1>
        <Link to="/">
            <h1>
                Go Home
            </h1>
        </Link>
    </div>
);

export default Error404page;