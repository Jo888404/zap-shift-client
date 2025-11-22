import React from 'react';

const ServiceFeatures = () => {


    const features = [
        {
            img: "/images/live-tracking.png",
            title: "Live Parcel Tracking",
            desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
        },
        {
            img: "/images/safe-delivery.png",
            title: "100% Safe Delivery",
            desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        },
        {
            img: "/images/safe-delivery.png",
            title: "24/7 Call Center Support",
            desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        },
    ];



    return (
        <section className="bg-[#F8FAFB] py-16 px-6">
            <div className="max-w-6xl mx-auto space-y-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center gap-8 p-8"
                    >
                        {/* Image */}
                        <div className="border-r-2 border-dotted border-[#03464D] w-full sm:w-1/3 flex justify-center">
                            <img
                                src={feature.img}
                                alt={feature.title}
                                className="h-40 w-auto object-contain "
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full sm:w-2/3 text-center sm:text-left">
                            <h3 className="text-lg font-semibold text-[#003132] mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceFeatures;