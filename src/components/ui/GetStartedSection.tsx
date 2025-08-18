import React from 'react';

const steps = [
  {
    title: 'Connect Your System',
    description: 'Integrate with our developer-first, RESTful API. Well-documented and easy to use.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-10l-4-4-4 4" />
      </svg>
    ),
  },
  {
    title: 'Configure Routing Rules',
    description: 'Use our intuitive dashboard to set up your routing logic, fallbacks, and fee structures.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
      </svg>
    ),
  },
  {
    title: 'Go Live & Scale',
    description: 'Start processing payments with full visibility and control. Add new corridors as you grow.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18V3H3zm5 14l7-7" />
      </svg>
    ),
  },
];

const GetStartedSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16  text-center">
        <div className="container mx-auto text-center  px-6 lg:px-6  gap-6 w-full">
            <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight sm:text-4xl leading-tight mb-4">Get Started in 3 Simple Steps</h2>
      <p className=" mb-12 max-w-2xl mx-auto">Launch your modern payout infrastructure in record time.</p>

      <div className="grid md:grid-cols-3 gap-8 items-center relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            <div className="bg-blue-400 p-5 rounded-full mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold  mb-2">{step.title}</h3>
            <p className="">{step.description}</p>
          </div>
        ))}
      </div>

        </div>
    </section>
  );
};

export default GetStartedSection;
