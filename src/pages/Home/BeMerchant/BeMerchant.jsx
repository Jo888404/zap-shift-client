import React from 'react';
import location from "../../../assets/location-merchant.png"

const BeMerchant = () => {
    return (
        <div className=" bg-no-repeat  bg-[#03373D]  bg-[url('assets/be-a-merchant-bg.png')] rounded-4xl lg:p-20 p-9">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img
                    src={location}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="lg:text-5xl text-2xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn border-none hover:bg-gray-300 rounded-full bg-[#CAEB66] text-black">Become a Merchant</button>
                    <button className="btn  border-[#CAEB66] rounded-full btn-ghost lg:ms-4 lg:mt-0 md:mt-0  mt-4 text-[#CAEB66]">Earn with Profast Courier</button>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;