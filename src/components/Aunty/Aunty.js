import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunty = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h2>Aunty</h2>
            <small>house: {house}</small><br />
            <small>{ornaments}</small>
        </div>
    );
};

export default Aunty;