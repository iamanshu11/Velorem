import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16  text-center mt-8">
      <div className="container mx-auto text-center  px-6 lg:px-6  gap-6 w-full">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight sm:text-5xl leading-tight mb-4">
          We're building the{" "} <br></br>
          
            future of global payouts.

        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl ">
          Velorem was founded on a simple belief: moving money across borders should be simple, transparent, and accessible for every business. We're a team of engineers, payment experts, and problem-solvers dedicated to abstracting away the complexity of global finance.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
