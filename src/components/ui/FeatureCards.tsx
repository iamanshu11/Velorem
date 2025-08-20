"use client";

import React, { useEffect, useRef } from "react";
import { Globe, Shuffle, ClipboardCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureDashboard: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  // Helper to assign refs safely
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <section className="bg-[#EBF6FF] dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-16 flex items-center justify-center">
      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight sm:text-5xl leading-tight mb-4">
            A Smarter Way to Manage
            <br />
            Global Payouts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From network expansion to compliance, Velorem is your complete operating system.
          </p>
        </div>

        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-6 mt-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Top Card */}
            <div
              ref={(el) => setCardRef(el, 0)}
              className="group cursor-pointer rounded-2xl dark:bg-black bg-white p-6 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <img
                src="/img/globe.png"
                alt="Global Network"
                className="absolute inset-0 w-full h-full object-cover dark:opacity-20 opacity-60 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 dark:text-white text-black opacity-80" />
                    <span className="text-sm dark:text-white text-black opacity-80">Go Global</span>
                  </div>
                  <span className="text-xs opacity-50">Global</span>
                </div>
                <div className="text-4xl font-bold mb-3">Instantly</div>
                <p className="text-sm opacity-80">
                  Connect once to our API and unlock a global network of pre- integrated banks and payment providers. Launch in new countries in minutes, not months.
                </p>
              </div>
            </div>

            {/* Bottom Card */}
            <div
              ref={(el) => setCardRef(el, 1)}
              className="group cursor-pointer rounded-2xl dark:bg-black bg-white p-6 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <img
                src="/img/smart.png"
                alt="Smart Routing"
                className="absolute inset-0 w-full h-full object-cover dark:opacity-20 opacity-60 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Shuffle className="w-5 h-5 dark:text-white text-black opacity-80" />
                    <span className="text-sm opacity-70">Optimize Every</span>
                  </div>
                  <span className="text-xs opacity-50">Transaction</span>
                </div>
                <div className="text-4xl font-bold mb-3">Transaction</div>
                <p className="text-sm opacity-80">
                  Our intelligent routing engine automatically selects the fastest and most cost-effective payout channel, with automated retries to maximize success rates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Tall Card */}
          <div
            ref={(el) => setCardRef(el, 2)}
            className="group cursor-pointer rounded-2xl dark:bg-black bg-white p-8 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <img
              src="/img/compliance.png"
              alt="Compliance"
              className="absolute inset-0 w-full h-full object-cover dark:opacity-20 opacity-60 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Unify & Automate</h2>
                <p className="text-lg opacity-80">Compliance</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <ClipboardCheck className="w-6 h-6 dark:text-white text-black opacity-80 md:mt-0 mt-3" />
                  <span className="text-sm opacity-70">AML/sanctions screening</span>
                </div>
                <div className="text-4xl font-bold mb-4">AML</div>
                <p className="text-sm opacity-80 leading-relaxed">
                  Automate AML/sanctions screening on every payout and get a single, unified ledger for all your transaction data. See your entire financial picture in real-time.
                </p>
              </div>
            </div>
            {/* <div className="relative  z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Shuffle className="w-5 h-5 text-white opacity-80" />
                    <span className="text-sm opacity-70">Optimize Every</span>
                  </div>
                  <span className="text-xs opacity-50">Transaction</span>
                </div>
                <br></br> <br></br> 
                <div className="text-4xl font-bold mb-3">Transaction</div>
                <br></br> <br></br>
                <p className="text-sm opacity-80">
                  Our intelligent routing engine automatically selects the fastest and most cost-effective payout channel, with automated retries to maximize success rates.
                </p>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDashboard;
