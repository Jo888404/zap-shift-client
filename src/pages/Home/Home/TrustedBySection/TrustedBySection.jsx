import React from 'react';
import Marquee from 'react-fast-marquee';

const TrustedBySection = () => {
    const logos = [
        { src: "/logos/casio.png", alt: "Casio" },
        { src: "/logos/amazon.png", alt: "Amazon" },
        { src: "/logos/moonstar.png", alt: "Moonstar" },
        { src: "/logos/start.png", alt: "Star Plus" },
        { src: "/logos/start-people 1.png", alt: "Start People" },
        { src: "/logos/randstad.png", alt: "Randstad" },
        { src: "/logos/amazon_vector.png", alt: "amazon_vector" },
    ];
    return (
        <section className="bg-[#F3F5F6] py-12">
            <div className="max-w-6xl mx-auto text-center px-6">
                <h2 className="lg:text-3xl text-2xl font-extrabold text-[#03373D] mb-10">
                    We&apos;ve helped thousands of sales teams
                </h2>

                <Marquee    
                    gradient={false}      // disables fade edges
                    speed={50}            // adjust speed (default: 50)
                    pauseOnHover={true}   // pauses animation when hovered
                    className="flex items-center"
                    
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default TrustedBySection;