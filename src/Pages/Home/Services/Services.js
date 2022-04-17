import React, { useEffect, useState } from 'react';
import repair1 from '../../../images/repair1.jpg'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div>
            <h2>Services is {services.length}</h2>
        </div>
    );
};

export default Services;