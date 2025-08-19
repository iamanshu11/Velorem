// import React from 'react';
// import ReactCountryFlag from 'react-country-flag';

// interface CountryCardProps {
//     country: string;
//     code: string; // ISO 3166-1 alpha-2 code
// }

// const CountryCard: React.FC<CountryCardProps> = ({ country, code }) => {
//     return (
//         <div className="flex items-center space-x-3 border border-gray-300 rounded-lg p-3 w-full lg:w-48">
//             <ReactCountryFlag
//                 countryCode={code}
//                 svg
//                 style={{
//                     width: '32px',
//                     height: '32px',
//                 }}
//                 title={country}
//             />
//             <span className="text-gray-900 dark:text-gray-100">{country}</span>
//         </div>
//     );
// };

// const GlobalMarketsSection: React.FC = () => {
//     const asianCountries = [
//         { country: 'India', code: 'IN' },
//         { country: 'Philippines', code: 'PH' },
//         { country: 'Pakistan', code: 'PK' },
//         { country: 'Bangladesh', code: 'BD' },
//         { country: 'Indonesia', code: 'ID' },
//     ];

//     const africanCountries = [
//         { country: 'Nigeria', code: 'NG' },
//         { country: 'Kenya', code: 'KE' },
//         { country: 'Ghana', code: 'GH' },
//         { country: 'South Africa', code: 'ZA' },
//         { country: 'Ethiopia', code: 'ET' },
//     ];

//     return (
//         <section className="py-16 bg-[#EBF6FF] dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-center">
//             <div className="container mx-auto text-center  px-6 lg:px-6  gap-6 w-full">
//                 <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight sm:text-4xl leading-tight mb-4">Reach Key Markets Across the Globe</h2>
//                 <p className=" mb-10">
//                     Instantly access our growing network of payout corridors in Asia, Africa, and beyond.
//                 </p>

//                 <div className="flex flex-col md:flex-row justify-center gap-12 mb-8">
//                     <div>
//                         <h3 className="text-blue-400 font-semibold mb-4">Major Asian Corridors</h3>
//                         <div className="flex flex-col gap-3 items-center">
//                             {asianCountries.map((c) => (
//                                 <CountryCard key={c.code} country={c.country} code={c.code} />
//                             ))}
//                         </div>
//                     </div>

//                     <div>
//                         <h3 className="text-blue-400 font-semibold mb-4">Key African Corridors</h3>
//                         <div className="flex flex-col gap-3 items-center">
//                             {africanCountries.map((c) => (
//                                 <CountryCard key={c.code} country={c.country} code={c.code} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <p className="">And many more corridors launching soon!</p>
//             </div>
//         </section>
//     );
// };

// export default GlobalMarketsSection;

"use client";

import React, { useState } from 'react';

interface CountryCardProps {
    country: string;
    code: string;
    payments?: string[];
}

// Custom Flag component using actual flag images
const CountryFlag: React.FC<{ countryCode: string; country: string }> = ({
    countryCode,
    country
}) => {
    return (
        <div className="relative">
            <img
                src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${countryCode.toLowerCase()}.svg`}
                alt={`${country} flag`}
                title={country}
                className="w-12 h-9 object-cover rounded-md shadow-lg border border-white/20"
                onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
                }}
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
    );
};

const CountryCard: React.FC<CountryCardProps> = ({ country, code, payments }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 w-full max-w-sm transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                        <CountryFlag countryCode={code} country={country} />
                        {/* Glowing effect on hover */}
                        <div className="absolute inset-0 rounded-md bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#4EAFFF] dark:group-hover:text-blue-400 transition-colors duration-300">
                            {country}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                            <div className={`w-2 h-2 rounded-full bg-green-400 transition-all duration-300 ${isHovered ? 'animate-pulse shadow-lg shadow-green-400/50' : ''}`}></div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Active</span>
                        </div>
                    </div>
                </div>

                {/* Payment Options */}
                {payments && (
                    <div
                        className={`
                            space-y-2 
                            sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0
                            sm:transition-all sm:duration-500
                            block
                        `}
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                            Payment Options
                        </span>
                        <ul className="list-disc list-inside text-sm font-semibold text-gray-800 dark:text-white space-y-1">
                            {payments.map((method, idx) => (
                                <li key={idx}>{method}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-pulse"></div>
            </div>
        </div>
    );
};

const GlobalMarketsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'asia' | 'africa'>('asia');

    const asianCountries = [
        {
            country: 'India',
            code: 'IN',
            payments: ['UPI', 'IMPS / NEFT', 'Paytm'],
        },
        {
            country: 'Philippines',
            code: 'PH',
            payments: ['GCash', 'PayMaya', 'Cash Pickup'],
        },
        {
            country: 'Pakistan',
            code: 'PK',
            payments: ['Bank Transfer', 'Easypaisa', 'JazzCash'],
        },
        {
            country: 'Bangladesh',
            code: 'BD',
            payments: ['bKash', 'Nagad', 'Bank Transfer'],
        },
        {
            country: 'Indonesia',
            code: 'ID',
            payments: ['GoPay', 'OVO', 'Bank Transfer'],
        },
    ];

    const africanCountries = [
        {
            country: 'Nigeria',
            code: 'NG',
            payments: ['Bank Transfer', 'Mobile Money'],
        },
        {
            country: 'Kenya',
            code: 'KE',
            payments: ['M-Pesa', 'Bank Transfer'],
        },
        {
            country: 'Ghana',
            code: 'GH',
            payments: ['MTN MoMo', 'Vodafone Cash'],
        },
        {
            country: 'South Africa',
            code: 'ZA',
            payments: ['Cash Pickup', 'Bank Transfer'],
        },
        {
            country: 'Ethiopia',
            code: 'ET',
            payments: ['Telebirr', 'Bank Transfer'],
        },
    ];

    const currentCountries = activeTab === 'asia' ? asianCountries : africanCountries;

    return (
        <section className="relative py-16 bg-[#fff] dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden">
            <div className="relative container mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-blue-500  rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Global Network</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight sm:text-5xl leading-tight mb-4">
                        Reach Key Markets
                        <br />
                        Across the Globe
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Instantly access our growing network of payout corridors with real-time processing,
                        competitive rates, and unmatched reliability.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50 dark:border-gray-700/50 shadow-lg flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setActiveTab("asia")}
                            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === "asia"
                                ? "bg-[#4EAFFF] text-white shadow-lg shadow-blue-500/25"
                                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`}
                        >
                            🌏 Asian Markets
                        </button>
                        <button
                            onClick={() => setActiveTab("africa")}
                            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === "africa"
                                ? "bg-[#4EAFFF] text-white shadow-lg shadow-blue-500/25"
                                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`}
                        >
                            🌍 African Markets
                        </button>
                    </div>
                </div>

                {/* Countries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
                    {currentCountries.map((country, index) => (
                        <div
                            key={country.code}
                            className="transform transition-all duration-500"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            <CountryCard {...country} />
                        </div>
                    ))}
                </div>
                {/* Coming Soon Section */} <div className="text-center"> <div className="inline-flex items-center space-x-3 bg-[#a8d6fc] dark:bg-gray-900 backdrop-blur-sm border border-[#a8d6fc] dark:border-gray-900 rounded-2xl px-8 py-4 mb-4"> <div className="flex space-x-1"> <div className="w-2 h-2 bg-[#4EAFFF] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div> <div className="w-2 h-2 bg-[#85c6fc] rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div> <div className="w-2 h-2 bg-[#4EAFFF] rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div> </div> <span className="text-lg font-semibold bg-[#34a4ff] bg-clip-text text-transparent"> 🚀 And many more corridors launching soon! </span> </div> <p className="text-gray-500 dark:text-gray-400"> Join our waitlist to be the first to access new markets as they become available. </p> </div>
            </div>


            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default GlobalMarketsSection;
