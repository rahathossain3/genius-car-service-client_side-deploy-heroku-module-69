# Getting Started with Create React App



## react helmate for page dynamic title 

    npm i react-helmet-async


##### app js file 


    <HelmetProvider>

        <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </BrowserRouter>

    </HelmetProvider>

## for a site name
        <Helmet>
                <title>About</title>
            </Helmet>


## for dynamic set

        
        const PageTitle = ({ title }) => {
            return (
                <div>
                    <Helmet>
                        <title>{title} : Genius car Service</title>
                    </Helmet>
                </div>
            );
        };

        export default PageTitle;

* 1. set which page use title

          <PageTitle title='page-title-name' ></PageTitle>



# 63_5-3 Do not allow protected route without email verification

## App.js

    <Routes>

    <Route path='/' element={
            <RequireAuth>
                <Home></Home>
            </RequireAuth>
            } ></Route>


    </Routes>

## RequireAuth.js

 * 1. for send email verification -->
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

 * 2. if user no verify email -->

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


# react google map **

* 1. for installation

    npm install --save @react-google-maps/api


# module 68

### get a input field target value
ob_property_name: event.target.input_field_name.value


### install  axios
    npm install axios