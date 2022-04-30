import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);


    const [user, setUser] = useState({
        name: 'akbar the ',
        email: 'akbar@momo.taj',
        address: 'Tajmohal road Md pur',
        phone: "0171111111"
    });

    // for update user
    const handleAddressChange = event => {
        console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };

        setUser(newUser);
        console.log(newUser);
    }

    return (
        <div className='w-50  mx-auto'>
            <h2>Pleases Order : {service.name}</h2>

            <form >
                <input className='w-100 mb-2' type="text" value={user.name} name='name' placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" onChange={handleAddressChange} value={user.address} name='address' placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>


        </div>
    );
};

export default Checkout;