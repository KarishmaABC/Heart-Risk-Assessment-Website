import { FaHeartbeat, FaExclamationTriangle, FaShieldAlt, FaSkullCrossbones } from "react-icons/fa";

const UnderstandingResults = () => {
  const riskLevels = [
    {
      title: "Low Risk",
      description:
        "You have a low likelihood of developing cardiovascular diseases in the next 10 years. Keep maintaining a heart-healthy lifestyle with proper diet and exercise.",
      color: "bg-gradient-to-r from-green-100 to-green-200 border-green-500 text-green-800",
      icon: <FaShieldAlt className="text-green-600 text-3xl" />,
    },
    {
      title: "Moderate Risk",
      description:
        "You have some risk factors that might contribute to heart disease. Lifestyle changes like improved diet and regular exercise are recommended.",
      color: "bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-500 text-yellow-800",
      icon: <FaExclamationTriangle className="text-yellow-600 text-3xl" />,
    },
    {
      title: "High Risk",
      description:
        "A high risk of cardiovascular disease is present. Immediate action, including medical check-ups, lifestyle adjustments, and possibly medications, is advised.",
      color: "bg-gradient-to-r from-orange-100 to-orange-200 border-orange-500 text-orange-800",
      icon: <FaHeartbeat className="text-orange-600 text-3xl" />,
    },
    {
      title: "Very High Risk",
      description:
        "You are at a severe risk of heart disease. Urgent medical attention, strict lifestyle modifications, and close monitoring by healthcare professionals are necessary.",
      color: "bg-gradient-to-r from-red-100 to-red-200 border-red-500 text-red-800",
      icon: <FaSkullCrossbones className="text-red-600 text-3xl" />,
    },
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-8" 
      style={{ backgroundImage: "url('src/assets/images/bg4.jpg')" }} // Replace with your image path
    >
      <div className="bg-white bg-opacity-10 shadow-xl backdrop-blur-lg rounded-xl p-8 max-w-5xl w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">🩺 Understanding Your Results</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Your heart disease risk assessment provides insights into your cardiovascular health.
          Based on your risk level, take appropriate actions to maintain or improve heart health.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {riskLevels.map((risk, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 p-5 border-l-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${risk.color}`}
            >
              {risk.icon}
              <div>
                <h2 className="font-bold text-xl">{risk.title}</h2>
                <p className="text-sm">{risk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnderstandingResults;
