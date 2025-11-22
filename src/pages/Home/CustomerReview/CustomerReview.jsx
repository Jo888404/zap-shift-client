import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import customer from "../../../assets/customer-top.png"

const testimonials = [
  {
    id: 1,
    name: "Rasel Ahamed",
    title: "CTO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 2,
    name: "Awlad Hossin",
    title: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    title: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 4,
    name: "Arif Khan",
    title: "Product Manager",
    text: "A posture corrector helps maintain natural spinal alignment, improving comfort and focus throughout the day.",
  },
  {
    id: 5,
    name: "Sumaiya Akter",
    title: "UX Designer",
    text: "Consistent use of a posture corrector can support better body mechanics and reduce daily tension.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(1);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center text-center">
        <img src={customer} alt="" className="mb-8" />
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        What our customers are saying
      </h2>
      <p className="text-gray-500 max-w-2xl mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      <div className="relative w-full max-w-4xl">
        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-md max-w-lg mx-auto"
          >
            <Quote className="text-teal-500 mb-4 mx-auto" size={32} />
            <p className="text-gray-600 mb-6 leading-relaxed">
              {testimonials[index].text}
            </p>
            <hr className="border-gray-200 mb-4" />
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-full" />
              <div className="text-left">
                <h4 className="text-gray-900 font-semibold">
                  {testimonials[index].name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonials[index].title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft size={18} className="text-gray-700" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-teal-800 w-2" : "bg-teal-200"
                }`}
              ></div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="p-3 bg-lime-400 rounded-full shadow hover:bg-lime-500 transition"
          >
            <ChevronRight size={18} className="text-gray-800" />
          </button>
        </div>
      </div>



      
    </section>
  );
}
