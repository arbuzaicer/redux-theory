import React from 'react';
import {Link} from "react-router-dom";

const NoMatch = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>No match found</h2>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default NoMatch;