"use client"; // <- Add this at the very top

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const ModernizePayouts: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animation/payer.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="bg-[#EBF6FF] dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-16">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between mx-auto px-6 lg:px-6 gap-6 w-full">
        {/* Left Content */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight sm:text-4xl leading-tight mb-4">
            Ready to Modernize Your Payouts?
          </h2>
          <p className="mb-6">
            Let us show you how Velorem can reduce your operational costs and help you scale faster.
            Schedule a free, no obligation demo with our team today.
          </p>
          <button className="rounded-full bg-[#4EAFFF] px-6 py-3 text-[#fff] font-medium transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            Schedule Your Free Demo
          </button>
        </div>

        {/* Right Lottie Animation */}
        <div className="md:w-1/2 flex justify-end">
          {animationData && (
            <Lottie animationData={animationData} loop={true} className=" h-96" />
          )}
        </div>
      </div>
    </section>
  );
};

export default ModernizePayouts;
