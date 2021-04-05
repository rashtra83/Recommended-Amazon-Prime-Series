import React from 'react';
import './Heading.css';
import SData from './SData';

const n = SData.length;
console.log(n);
const Heading = () => {
    return (
        <h1 className="h1">List of Top {n} Amazon Prime Series</h1>
    )
}

export default Heading;