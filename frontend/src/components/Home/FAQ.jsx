import React, { useState, useRef, useEffect } from "react";
import { questions } from "../../constants";
import gsap from "gsap";
import { IconContext } from "react-icons";
import { IoIosArrowUp } from "react-icons/io";
import { faqPoster } from "../../assets";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const arrowRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((content, idx) => {
      if (idx === activeIndex) {
        gsap.to(content, { height: "auto", duration: 0.2, ease: "power2.out" });
      } else {
        gsap.to(content, { height: 0, duration: 0.2, ease: "power2.in" });
      }
    });

    arrowRefs.current.forEach((arrow, idx) => {
      if (idx === activeIndex) {
        gsap.to(arrow, { rotate: 180, duration: 0.2 });
      } else {
        gsap.to(arrow, { rotate: 0, duration: 0.2 });
      }
    });
  }, [activeIndex]);

  return (
    <div className="grid grid-cols-12 gap-2 m-8">
      <div className="col-span-6 flex justify-center">
        <img src={faqPoster} alt="poster" className="h-96 aspect-square" />
      </div>
      <div className="divide-y divide-gray-300 col-span-6">
        <h2 className="text-5xl font-bold mb-8 rozha-one-regular">
          Frequently Asked Questions
        </h2>
        {questions.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="flex justify-between items-center w-full py-2 px-4  font-bold focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span
                className="font-bold"
                ref={(el) => (arrowRefs.current[index] = el)}
              >
                <IconContext.Provider value={{ size: "17px" }}>
                  <IoIosArrowUp />
                </IconContext.Provider>
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-300 ease-in-out "
              style={{ height: 0 }}
            >
              <p className="mt-2 pl-8 py-2 font-semibold bg-slate-100">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
