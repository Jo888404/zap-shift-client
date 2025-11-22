import React from 'react';
import errorPic from '../../../assets/Page Not Found 404.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            

            <div className='lg:w-[500px] lg:ml-80'>
                <Lottie
                    animationData={errorPic}
                    loop={true}
                    
                />
            </div>
            <h1 className='mb-6 text-3xl text-red-500'>Page not found-404</h1>
            <Link to={"/"}><button className='btn btn-primary mb-8'>Go Back to Home</button></Link>

        </div>
    );
};

export default ErrorPage;