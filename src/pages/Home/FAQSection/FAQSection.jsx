import React from 'react';


import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";


const faqs = [
    {
        question: "How does this posture corrector work?",
        answer:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer:
            "Yes, our posture corrector is designed to be fully adjustable and suitable for users of all ages and most body types.",
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer:
            "Absolutely. Consistent use can help reduce slouching, ease back pain, and improve your posture naturally over time.",
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer:
            "Yes, the advanced model includes gentle vibration reminders to help you maintain correct posture throughout the day.",
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer:
            "You can subscribe to our email notification list, and we’ll alert you as soon as the product becomes available again.",
    },
    {
        question: "Can I wear it under my clothes?",
        answer:
            "Yes, the posture corrector is designed with soft and breathable materials so it can be worn discreetly under clothing.",
    },
    {
        question: "How long should I wear it per day?",
        answer:
            "We recommend wearing it for 20–30 minutes per day initially and gradually increasing the duration as your posture improves.",
    },
];






const FAQSection = () => {


    const [activeIndex, setActiveIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);


    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);




    return (
        <section className="py-20 bg-[#f5f7f6] text-center px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-gray-500 mb-12">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>


                {/* FAQ List */}
                <div className="space-y-4 text-left">
                    {visibleFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl bg-white transition-all duration-300 ${activeIndex === index
                                ? "border-teal-400 shadow-md"
                                : "border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 font-medium text-gray-800"
                            >
                                <span>{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="text-teal-500" />
                                ) : (
                                    <ChevronDown className="text-gray-500" />
                                )}
                            </button>


                            <div
                                className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0 p-0"
                                    }`}
                            >
                                <p className="text-gray-600 text-sm md:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* See More Button */}
                <div className="mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-lime-400 hover:bg-lime-500 text-gray-900  font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 shadow transition"
                    >
                        {showAll ? "Show Less" : "See More FAQ’s"}
                        <span className="bg-gray-900 text-white rounded-full p-1">
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </div>
            </div>

            
        </section>
    );
};


export default FAQSection;