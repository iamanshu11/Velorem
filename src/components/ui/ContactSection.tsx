import React from "react";

const ContactSection: React.FC = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16   ">
      <div className="container mx-auto   px-6 lg:px-6  gap-6 w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold ">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg ">
            We'd love to hear from you. Whether you have a question about
            features, trials, pricing, or anything else, our team is ready to
            answer all your questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 rounded-xl border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium "
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center  border border-transparent rounded-md shadow-sm text-sm  bg-[#4EAFFF] px-6 py-3 text-[#fff] font-medium  transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg w-12 h-12 flex items-center justify-center">
                  {/* Mail Icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold ">Email Us</h3>
                <p className="">
                  Our team will get back to you within 24 hours.
                </p>
                <a
                  href="mailto:sales@velorem.com"
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  sales@velorem.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg w-12 h-12 flex items-center justify-center">
                  {/* Location Icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold ">
                  Our Office
                </h3>
                <p className="">
                  123 Fintech Avenue, Suite 500
                  <br />
                  Innovation City, 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
