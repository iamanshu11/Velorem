import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto   px-6 lg:px-6  gap-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              To empower Money Transfer Operators and global businesses with a
              single, intelligent platform that simplifies network management,
              optimizes transaction costs, and ensures compliance, enabling
              them to scale with confidence and serve their customers better.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://placehold.co/600x400/E0E7FF/4F46E5?text=Collaboration"
              alt="Team collaborating"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
