import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-10 shadow-md">
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="mt-7 text-lg">Understand the process of heart disease risk assessment.</p>
      </header>

      {/* Steps Section */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        {[
          { step: 1, title: "Obtain the Form", img: "form,medical", desc: "Locate a Heart Disease Risk Assessment Form from a healthcare provider, clinic, or online resource. Ensure it is a printable version." },
          { step: 2, title: "Personal Information", img: "health,data", desc: "Fill in your personal details, including name, age, gender, and contact information." },
          { step: 3, title: "Medical History", img: "medical,history", desc: "Provide details about previous heart disease diagnoses, family history, and existing medical conditions such as diabetes or hypertension." },
          { step: 4, title: "Lifestyle Factors", img: "healthy,lifestyle", desc: "Answer questions about smoking habits, physical activity, diet, and alcohol consumption." },
          { step: 5, title: "Physical Examination", img: "doctor,examination", desc: "Record your blood pressure, height, weight, and waist circumference to assess risk factors." },
          { step: 6, title: "Blood Tests", img: "blood,test", desc: "Provide recent blood test results for cholesterol, triglycerides, and fasting glucose. Consult a healthcare provider if needed." }
        ].map((item, index) => (
          <div key={index} className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            {index % 2 === 0 ? (
              <>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <h2 className="text-3xl font-semibold text-blue-600 mb-4">Step {item.step}: {item.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
                <img src={`src/assets/images/bg9.jpg`} alt={item.title} className="rounded-lg shadow-md" />
              </>
            ) : (
              <>
                <img src={`src/assets/images/bg8.jpg`} alt={item.title} className="rounded-lg shadow-md" />
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <h2 className="text-3xl font-semibold text-blue-600 mb-4">Step {item.step}: {item.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Heart Health. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HowItWorks;
