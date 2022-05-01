// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);

    //for unauthorize user
    const navigate = useNavigate();

    useEffect(() => {

        const getOrders = async () => {
            //user wish product
            const email = user.email;

            const url = `http://localhost:5000/order?email=${email}`;
            //when get fake token
            try {
                const { data } = await axiosPrivate.get(url);

                // const { data } = await axios.get(url, {
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
                //     }
                // });
                setOrders(data);

            }
            catch (error) {
                console.log(error.message);
                // fake token
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();


    }, [user])


    return (
        <div>
            <h2>Your Orders: {orders.length} </h2>
        </div>
    );
};

export default Order;