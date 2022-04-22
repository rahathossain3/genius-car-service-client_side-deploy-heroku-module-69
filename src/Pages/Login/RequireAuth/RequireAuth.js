import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    // for user and loading
    const [user, loading] = useAuthState(auth);

    //for location
    const location = useLocation();

    // for send email varification
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    // loading 
    if (loading) {
        return <Loading></Loading>
    }


    // have not any use
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if user no verify email
    if (!user.emailVerified) {
        return <div >
            <h3 className=' text-danger'> Your Email Is Not Verified!!</h3>
            <h5 className=' text-success'> Please Verify Your Email Address</h5>

            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Sent Verify email Again
            </button>
            <ToastContainer></ToastContainer>

        </div>
    }


    return children;
};

export default RequireAuth;