import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-10 shadow-md">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-7 text-lg">Learn more about our mission and team</p>
      </header>

      {/* Content Section */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Heart Health</strong>, we are committed to helping individuals assess their heart disease risk 
              with data-driven insights. Our goal is to provide accessible and reliable health assessments that empower 
              users to take proactive steps toward a healthier life.
            </p>
          </div>
          <img 
            src="src/assets/images/bg2.jpg" 
            alt="Our Mission" 
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="src/assets/images/bg6.jpg" 
            alt="Our Team" 
            className="rounded-lg shadow-md"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Meet Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated team of healthcare professionals, data scientists, and software engineers work 
              tirelessly to ensure our risk assessment tool remains accurate and user-friendly. We believe in 
              leveraging technology for preventive healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Heart Health. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
