// components/FeatureDashboard.tsx
import React from "react";
import { Globe, Shuffle, ClipboardCheck } from "lucide-react";

const FeatureDashboard: React.FC = () => {
  return (
    <section className="bg-[#EBF6FF] dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-16 flex items-center justify-center ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Top Card */}
          <div className="rounded-2xl dark:bg-black bg-[#fff] p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background Image */}
            <img
              src="/img/globe.png"
              alt="Global Network"
              className="absolute inset-0 w-full h-full object-cover dark:opacity-20 opacity-60"
            />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-white opacity-80" />
                  <span className="text-sm opacity-70">Go Global</span>
                </div>
                <span className="text-xs opacity-50">Fast Setup</span>
              </div>
              <div className="text-5xl font-bold mb-3">API</div>
              <p className="text-sm opacity-80">
                Unlock a global network of banks & payment providers.
              </p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="rounded-2xl dark:bg-black bg-[#fff] p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background Image */}
            <img
              src="/img/smart.png"
              alt="Smart Routing"
              className="absolute inset-0 w-full h-full object-cover dark:opacity-20 opacity-60"
            />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Shuffle className="w-5 h-5 text-white opacity-80" />
                  <span className="text-sm opacity-70">Optimize</span>
                </div>
                <span className="text-xs opacity-50">Smart Routing</span>
              </div>
              <div className="text-5xl font-bold mb-3">
                99<span className="text-xl opacity-70">%</span>
              </div>
              <p className="text-sm opacity-80">
                Selects fastest & most cost-effective payout channels.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Tall Card */}
        <div className="rounded-2xl dark:bg-black bg-[#fff]   p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
          {/* Background Image */}
          <img
            src="/img/compliance.png"
            alt="Compliance"
            className="absolute inset-0 w-full h-full object-cover dark:opacity-20 opacity-60"
          />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Unify & Automate</h2>
              <p className="text-lg opacity-80">Compliance</p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6">
                <ClipboardCheck className="w-6 h-6  opacity-80" />
                <span className="text-sm opacity-70">24/7 Monitoring</span>
              </div>
              <div className="text-5xl font-bold mb-4">24/7</div>
              <p className="text-sm opacity-80 leading-relaxed">
                Automate AML/sanctions screening on every payout and view your
                entire financial picture in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDashboard;
