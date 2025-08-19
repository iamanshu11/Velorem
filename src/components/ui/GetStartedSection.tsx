"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Connect Your System",
    description:
      "Integrate with our developer-first, RESTful API. Well-documented and easy to use.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 17l4 4 4-4m0-10l-4-4-4 4"
        />
      </svg>
    ),
  },
  {
    title: "Configure Routing Rules",
    description:
      "Use our intuitive dashboard to set up your routing logic, fallbacks, and fee structures.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4h16v16H4V4z"
        />
      </svg>
    ),
  },
  {
    title: "Go Live & Scale",
    description:
      "Start processing payments with full visibility and control. Add new corridors as you grow.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3v18h18V3H3zm5 14l7-7"
        />
      </svg>
    ),
  },
];

const GetStartedSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#EBF6FF] to-white dark:from-gray-900 dark:to-gray-800 dark:text-white text-black py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2
          
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Get Started in <br></br> 3 Simple Steps
        </h2>

        <p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16"
        >
          Launch your modern payout infrastructure in record time.
        </p>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center bg-white/80 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200/40 dark:border-gray-700/40 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >

              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-5 rounded-full mb-6 shadow-lg">
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}

          {/* Connector line (only visible on desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
