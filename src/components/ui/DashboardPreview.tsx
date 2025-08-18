import React, { useState } from "react";

// --- Types ---
type TrendDirection = "up" | "down";

interface KPICardProps {
    title: string;
    value: string;
    trend: string;
    trendDirection: TrendDirection;
}

interface ActivityIconProps {
    status: "Settled" | "Processing" | "Failed";
}

interface Corridor {
    country: string;
    countryCode: string; // ISO 3166-1 alpha-2 code
    amount: number;
    display: string;
}

interface ChartData {
    title: string;
    volume: string;
    trend: string;
    path: string;
    failure: string;
    peak: { cx: string; cy: string };
    corridors: Corridor[];
}

type RangeKey = "7D" | "30D" | "90D" | "1Y";

// Simple flag component to replace react-country-flag
const CountryFlag: React.FC<{ countryCode: string; title: string; style?: React.CSSProperties }> = ({ 
    countryCode, 
    title, 
    style = { width: '20px', height: '20px' } 
}) => {
    const flagEmojis: Record<string, string> = {
        'IN': '🇮🇳',
        'NG': '🇳🇬',
        'PH': '🇵🇭',
        'PK': '🇵🇰'
    };
    
    return (
        <span 
            style={style} 
            title={title}
            className="inline-block"
        >
            {flagEmojis[countryCode] || '🏳️'}
        </span>
    );
};

// --- KPICard Component ---
const KPICard: React.FC<KPICardProps> = ({ title, value, trend, trendDirection }) => (
    <div className="dashboard-preview-card bg-white dark:bg-gray-800 dark:text-white p-5 rounded-xl border border-gray-200 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <p className="text-sm ">{title}</p>
        <div className="flex items-end justify-between mt-1">
            <p className="text-3xl font-bold ">{value}</p>
            <p
                className={`flex items-center text-sm font-semibold ${trendDirection === "up" ? "text-green-600" : "text-red-600"
                    }`}
            >
                {trendDirection === "up" ? (
                    <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        ></path>
                    </svg>
                )}
                {trend}
            </p>
        </div>
    </div>
);

// --- ActivityIcon Component ---
const ActivityIcon: React.FC<ActivityIconProps> = ({ status }) => {
    const getIcon = (): React.ReactElement => {
        switch (status) {
            case "Settled":
                return (
                    <div className="w-8 h-8 bg-green-100 text-green-600 flex items-center justify-center rounded-full mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                );
            case "Processing":
                return (
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mr-3">
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                );
            case "Failed":
                return (
                    <div className="w-8 h-8 bg-red-100 text-red-600 flex items-center justify-center rounded-full mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                );
            default:
                return <div></div>;
        }
    };

    return getIcon();
};

// --- Main Dashboard Preview Component ---
export default function App() {
    const [activeRange, setActiveRange] = useState<RangeKey>("7D");

    const chartData: Record<RangeKey, ChartData> = {
        "7D": {
            title: "Transaction Volume (7D)",
            volume: "$452k",
            trend: "+12%",
            path: "M 0 100 L 80 80 L 160 120 L 240 60 L 320 90 L 400 70 L 500 100",
            failure: "M 0 140 L 80 142 L 160 138 L 240 141 L 320 140 L 400 143 L 500 140",
            peak: { cx: "240", cy: "60" },
            corridors: [
                { country: "India", countryCode: "IN", amount: 120000, display: "$120k" },
                { country: "Nigeria", countryCode: "NG", amount: 85000, display: "$85k" },
                { country: "Philippines", countryCode: "PH", amount: 75000, display: "$75k" },
            ],
        },
        "30D": {
            title: "Transaction Volume (30D)",
            volume: "$1.8M",
            trend: "+15%",
            path: "M 0 90 L 80 110 L 160 80 L 240 120 L 320 70 L 400 90 L 500 80",
            failure: "M 0 142 L 80 138 L 160 140 L 240 137 L 320 141 L 400 139 L 500 142",
            peak: { cx: "320", cy: "70" },
            corridors: [
                { country: "India", countryCode: "IN", amount: 480000, display: "$480k" },
                { country: "Nigeria", countryCode: "NG", amount: 340000, display: "$340k" },
                { country: "Pakistan", countryCode: "PK", amount: 300000, display: "$300k" },
            ],
        },
        "90D": {
            title: "Transaction Volume (90D)",
            volume: "$5.2M",
            trend: "+18%",
            path: "M 0 110 L 80 80 L 160 90 L 240 70 L 320 100 L 400 60 L 500 80",
            failure: "M 0 138 L 80 140 L 160 142 L 240 139 L 320 141 L 400 140 L 500 138",
            peak: { cx: "400", cy: "60" },
            corridors: [
                { country: "India", countryCode: "IN", amount: 1500000, display: "$1.5M" },
                { country: "Nigeria", countryCode: "NG", amount: 950000, display: "$950k" },
                { country: "Philippines", countryCode: "PH", amount: 880000, display: "$880k" },
            ],
        },
        "1Y": {
            title: "Transaction Volume (1Y)",
            volume: "$21.5M",
            trend: "+25%",
            path: "M 0 70 L 80 90 L 160 60 L 240 80 L 320 50 L 400 70 L 500 60",
            failure: "M 0 141 L 80 143 L 160 139 L 240 142 L 320 140 L 400 138 L 500 141",
            peak: { cx: "320", cy: "50" },
            corridors: [
                { country: "India", countryCode: "IN", amount: 6200000, display: "$6.2M" },
                { country: "Nigeria", countryCode: "NG", amount: 4100000, display: "$4.1M" },
                { country: "Pakistan", countryCode: "PK", amount: 3500000, display: "$3.5M" },
            ],
        },
    };

    const currentChart = chartData[activeRange];
    const topCorridorAmount = currentChart.corridors[0]?.amount || 1;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg font-sans">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-500 p-4 sm:p-6 rounded-2xl shadow-2xl border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <KPICard
                            title="Total Payout Volume"
                            value={currentChart.volume}
                            trend={currentChart.trend}
                            trendDirection="up"
                        />
                        <KPICard title="Success Rate" value="98.2%" trend="+0.5%" trendDirection="up" />

                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-xl">
                            <h4 className="font-semibold mb-4">Top Corridors</h4>
                            <div className="space-y-4">
                                {currentChart.corridors.map((corridor) => (
                                    <div key={corridor.country}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium flex items-center gap-1">
                                                <CountryFlag
                                                    countryCode={corridor.countryCode}
                                                    style={{ width: '20px', height: '20px' }}
                                                    title={corridor.country}
                                                />
                                                {corridor.country}
                                            </span>
                                            <span className="text-gray-500">{corridor.display}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div
                                                className="bg-indigo-500 h-1.5 rounded-full"
                                                style={{
                                                    width: `${(corridor.amount / topCorridorAmount) * 100}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl border border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
                                <h4 className="font-semibold ">{currentChart.title}</h4>
                                <div className="bg-gray-200 p-1 rounded-lg  text-xs font-medium text-gray-600">
                                    {(["7D", "30D", "90D", "1Y"] as RangeKey[]).map((range) => (
                                        <button
                                            key={range}
                                            onClick={() => setActiveRange(range)}
                                            className={`px-3 py-1 rounded-md transition-colors ${activeRange === range
                                                ? "bg-indigo-600 text-white font-semibold"
                                                : ""
                                                }`}
                                        >
                                            {range}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Chart */}
                            <svg
                                width="100%"
                                height="180px"
                                viewBox="0 0 500 150"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop
                                            offset="0%"
                                            style={{ stopColor: "rgba(79, 70, 229, 0.4)" }}
                                        />
                                        <stop
                                            offset="100%"
                                            style={{ stopColor: "rgba(79, 70, 229, 0)" }}
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    d={currentChart.path + " L 500 150 L 0 150 Z"}
                                    fill="url(#gradient)"
                                />
                                <path
                                    d={currentChart.path}
                                    stroke="#4f46e5"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d={currentChart.failure}
                                    stroke="#ef4444"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle
                                    cx={currentChart.peak.cx}
                                    cy={currentChart.peak.cy}
                                    r="5"
                                    fill="#4f46e5"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-xl">
                            <h4 className="font-semibold mb-4">Recent Activity</h4>
                            <div className="space-y-3 text-sm">
                                {/* Row */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 rounded-md gap-2">
                                    <div className="flex items-center gap-2">
                                        <ActivityIcon status="Settled" />
                                        <div className="flex flex-wrap items-center gap-1">
                                            <span className="font-medium">Payout to A. Sharma</span>
                                            <CountryFlag countryCode="IN" style={{ width: 16, height: 16 }} title="India" />
                                        </div>
                                    </div>
                                    <div className="text-gray-500 font-medium text-left sm:text-right">
                                        Settled
                                    </div>
                                </div>

                                {/* Row */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 rounded-md gap-2">
                                    <div className="flex items-center gap-2">
                                        <ActivityIcon status="Processing" />
                                        <div className="flex flex-wrap items-center gap-1">
                                            <span className="font-medium">Payout to B. Okoro</span>
                                            <CountryFlag countryCode="NG" style={{ width: 16, height: 16 }} title="Nigeria" />
                                        </div>
                                    </div>
                                    <div className="text-gray-500 font-medium text-left sm:text-right">
                                        Processing
                                    </div>
                                </div>

                                {/* Row */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 rounded-md gap-2">
                                    <div className="flex items-center gap-2">
                                        <ActivityIcon status="Failed" />
                                        <div className="flex flex-wrap items-center gap-1">
                                            <span className="font-medium">Payout to D. Khan</span>
                                            <CountryFlag countryCode="PH" style={{ width: 16, height: 16 }} title="Philippines" />
                                        </div>
                                    </div>
                                    <div className="text-gray-500 font-medium text-left sm:text-right">
                                        Failed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}