"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-10l-4-4-4 4" />
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18V3H3zm5 14l7-7" />
      </svg>
    ),
  },
];

const GetStartedSection = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // if (!ScrollTrigger.isTouch) {
    //   ScrollSmoother.create({
    //     wrapper: "#smooth-wrapper",
    //     content: "#smooth-content",
    //     smooth: 1.2,
    //     effects: true,
    //   });
    // }
    

    // Title floats up (no pin)
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Paragraph fade in
    gsap.fromTo(
      paraRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cards animate in one by one
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <section
      className="relative bg-gradient-to-b from-[#EBF6FF] to-white 
      dark:from-gray-900 dark:to-gray-800 dark:text-white text-black 
      py-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full" />

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Get Started in <br /> 3 Crazy Steps 
        </h2>

        <p ref={paraRef} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
          Launch your modern payout infrastructure in record time.
        </p>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative flex flex-col items-center text-center 
              bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl 
              p-10 rounded-2xl border border-white/20 dark:border-gray-700/40
              shadow-[0_0_30px_rgba(59,130,246,0.3)] 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] 
              transition-all duration-500 hover:scale-105 hover:-rotate-1"
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-5 rounded-full mb-6 shadow-lg group-hover:scale-110 transform transition duration-500">
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>

              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            </div>
          ))}

          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 animate-pulse -z-10" />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
