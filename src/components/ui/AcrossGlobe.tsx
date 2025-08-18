import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface CountryCardProps {
    country: string;
    code: string; // ISO 3166-1 alpha-2 code
}

const CountryCard: React.FC<CountryCardProps> = ({ country, code }) => {
    return (
        <div className="flex items-center space-x-3 border border-gray-300 rounded-lg p-3 w-full lg:w-48">
            <ReactCountryFlag
                countryCode={code}
                svg
                style={{
                    width: '32px',
                    height: '32px',
                }}
                title={country}
            />
            <span className="text-gray-900 dark:text-gray-100">{country}</span>
        </div>
    );
};

const GlobalMarketsSection: React.FC = () => {
    const asianCountries = [
        { country: 'India', code: 'IN' },
        { country: 'Philippines', code: 'PH' },
        { country: 'Pakistan', code: 'PK' },
        { country: 'Bangladesh', code: 'BD' },
        { country: 'Indonesia', code: 'ID' },
    ];

    const africanCountries = [
        { country: 'Nigeria', code: 'NG' },
        { country: 'Kenya', code: 'KE' },
        { country: 'Ghana', code: 'GH' },
        { country: 'South Africa', code: 'ZA' },
        { country: 'Ethiopia', code: 'ET' },
    ];

    return (
        <section className="py-16 bg-[#EBF6FF] dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-center">
            <div className="container mx-auto text-center  px-6 lg:px-6  gap-6 w-full">
                <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight sm:text-4xl leading-tight mb-4">Reach Key Markets Across the Globe</h2>
                <p className=" mb-10">
                    Instantly access our growing network of payout corridors in Asia, Africa, and beyond.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-12 mb-8">
                    <div>
                        <h3 className="text-blue-400 font-semibold mb-4">Major Asian Corridors</h3>
                        <div className="flex flex-col gap-3 items-center">
                            {asianCountries.map((c) => (
                                <CountryCard key={c.code} country={c.country} code={c.code} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-blue-400 font-semibold mb-4">Key African Corridors</h3>
                        <div className="flex flex-col gap-3 items-center">
                            {africanCountries.map((c) => (
                                <CountryCard key={c.code} country={c.country} code={c.code} />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="">and many more corridors launching soon!</p>
            </div>
        </section>
    );
};

export default GlobalMarketsSection;
