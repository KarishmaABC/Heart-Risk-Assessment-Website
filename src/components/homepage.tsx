import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Check if user is authenticated (for now, using localStorage)
    const isAuthenticated = localStorage.getItem("userToken"); // Assuming userToken is stored after login

    if (isAuthenticated) {
      navigate("/assessment"); // Redirect to Risk Assessment page if logged in
    } else {
      navigate("/login"); // Redirect to Login page if not logged in
    }
  };

  return (
    <div className="font-sans">
      <main className="pt-15">
        <section
          id="hero"
          className="h-screen flex flex-col justify-center items-center text-center bg-blue-50 px-4"
          style={{ backgroundImage: "url('src/assets/images/bg10.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h1 className="text-4xl font-bold text-blue-700">💙 Assess Your Heart Disease Risk 💙</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            Take the first step towards a healthier heart with our comprehensive risk assessment tool.
          </p>
          <button 
            onClick={handleGetStarted} 
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
