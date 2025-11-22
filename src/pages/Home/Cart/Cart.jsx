import React, { useEffect, useState } from 'react';
import car from "../../../assets/car.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {


    const [enableAOS, setEnableAOS] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setEnableAOS(width >= 768); // md and up
        };

        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);




    useEffect(() => {
        if (enableAOS) {
            AOS.init({
                offset: 200,
                delay: 50,
                duration: 1500,
                easing: "linear",
                mirror: true,
                once: false,
                ancorPlacement: "top-center",
            });
        } else {
            AOS.refreshHard(); // removes effects on sm
        }
    }, [enableAOS]);





    return (
        <div className='max-w-6xl mx-auto mt-12'>
            <h1 className='font-extrabold text-3xl mb-8'>How it Works</h1>
            <div className='lg:flex lg:gap-6'>
                <div
                    {...(enableAOS && {
                        "data-aos": "zoom-in-up",
                        "data-aos-offset": "200",
                        "data-aos-delay": "50",
                        "data-aos-duration": "1500",
                        "data-aos-easing": "linear",
                        "data-aos-mirror": "true",
                        "data-aos-once": "false",
                        "data-aos-anchor-placement": "top-center",
                    })}

                    className="card bg-white text-black card-lg shadow-sm m-2 ">
                    <div className="card-body">
                        <img className='w-14 h-14 ' src={car} alt="pic" />
                        <h2 className="card-title font-bold text-xl text-[#03373D]">Booking Pick & Drop</h2>
                        <p className='text-sm font-medium text-[#606060]'>From personal packages to  business shipments — we deliver on time, every time.</p>
                        <div className="justify-end card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div

                    {...(enableAOS && {
                        "data-aos": "zoom-in",
                        "data-aos-offset": "200",
                        "data-aos-delay": "50",
                        "data-aos-duration": "1500",
                        "data-aos-easing": "linear",
                        "data-aos-mirror": "true",
                        "data-aos-once": "false",
                        "data-aos-anchor-placement": "top-center",
                    })}

                    className="card  bg-white text-black card-lg shadow-sm m-2">
                    <div className="card-body">
                        <img className='w-14 h-14 ' src={car} alt="pic" />
                        <h2 className="card-title font-bold text-xl text-[#03373D]">Cash On Delivery</h2>
                        <p className='text-sm font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                        <div className="justify-end card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div

                    {...(enableAOS && {
                        "data-aos": "zoom-out-left",
                        "data-aos-offset": "200",
                        "data-aos-delay": "50",
                        "data-aos-duration": "1500",
                        "data-aos-easing": "linear",
                        "data-aos-mirror": "true",
                        "data-aos-once": "false",
                        "data-aos-anchor-placement": "top-center",
                    })}


                    className="card  bg-white text-black card-lg shadow-sm m-2">
                    <div className="card-body">
                        <img className='w-14 h-14 ' src={car} alt="pic" />
                        <h2 className="card-title font-bold text-xl text-[#03373D]">Delivery Hub</h2>
                        <p className='text-sm font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                        <div className="justify-end card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div
                    {...(enableAOS && {
                        "data-aos": "fade-down",
                        "data-aos-offset": "200",
                        "data-aos-delay": "50",
                        "data-aos-duration": "1500",
                        "data-aos-easing": "linear",
                        "data-aos-mirror": "true",
                        "data-aos-once": "false",
                        "data-aos-anchor-placement": "top-center",
                    })}

                    className="card bg-white text-black card-lg shadow-sm m-2">
                    <div className="card-body">
                        <img className='w-14 h-14 ' src={car} alt="pic" />
                        <h2 className="card-title font-bold text-xl text-[#03373D]">Booking SME & Corporate</h2>
                        <p className='text-sm font-medium text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                        <div className="justify-end card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Cart;


