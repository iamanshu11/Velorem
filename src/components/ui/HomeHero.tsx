"use client";

import Image from "next/image";
import Link from "next/link";
import DashboardPreview from "@/components/ui/DashboardPreview";

export default function HomeHero() {
    return (
        <section className=" flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
            <div className="container mx-auto text-center  px-6 lg:px-6 py-16 gap-6 w-full">
                {/* Left Side */}
                <div className="flex flex-col justify-center gap-6 mb-6">
                    <h1 className="text-3xl lg:text-5xl font-extrabold  tracking-tight sm:text-5xl leading-tight">
                        The World's Payouts, <br /> Simplified for MTOs
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-center">
                        Stop juggling dozens of payout APIs. Velorem provides a single
                        platform to connect, manage, and optimize all your global payouts.
                        Expand your reach, reduce your costs, and scale with confidence.
                    </p>
                </div>

                {/* Right Side */}
                <div className="relative flex justify-center md:justify-center w-full ">
                    <div className="relative w-full h-auto  overflow-hidden ">
                        <DashboardPreview />
                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-center items-center gap-4 mt-5">
                            <Link
                                href="/contact"
                                className="rounded-full bg-[#4EAFFF] px-6 py-3 text-[#fff] font-medium  transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            >
                                Talk to Sales
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
