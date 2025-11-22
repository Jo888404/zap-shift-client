import React from 'react';

const ServiceCard = ({ item }) => {
    const { title, description, icon: Icon } = item;
    return (
        <div>
            {/* <div className="card w-full  bg-white text-black ">
                <div className="card-body ">
                    
                    <div className='text-4xl text-primary mb-4 text-center'>
                        <Icon />
                    </div>
                    <h2 className="card-title text-center font-bold text-xl text-[#03373D]">{title}</h2>
                    <p className='text-sm font-medium text-[#606060]'>{description}</p>
                   
                </div>
            </div> */}

            <div className="card h-[300px]  bg-white cursor-pointer  text-black   hover:bg-[#CAEB66] hover:scale-105 hover:text-gray-900 transition-all duration-300 ease-out p-6 rounded-2xl shadow-lg">
                
                
                <div className="card-body items-center text-center ">
                    <div className='text-4xl text-primary mb-4 text-center'>
                        <Icon />
                    </div>
                    <h2 className="card-title ">{title}</h2>
                    <p className=''>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;