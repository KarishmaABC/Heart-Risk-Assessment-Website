import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
      question: "Who typically requests a Heart Disease Risk Assessment?",
      answer: "Doctors, healthcare professionals, or individuals concerned about their cardiovascular health often request a Heart Disease Risk Assessment."
    },
    {
      question: "When are Heart Disease Risk Assessments used?",
      answer: "These assessments are used during routine health check-ups, before surgeries, or when a patient has risk factors like high blood pressure, obesity, or diabetes."
    },
    {
      question: "How are Heart Disease Risk Assessments used?",
      answer: "The results help doctors determine lifestyle changes, medications, or further tests needed to prevent heart disease."
    },
    {
      question: "How long does a Heart Disease Risk Assessment take?",
      answer: "It usually takes between 15-30 minutes, depending on the method used, such as online tools, medical tests, or detailed doctor evaluations."
    },
    {
      question: "Can I lower my heart disease risk?",
      answer: "Yes! Regular exercise, a balanced diet, quitting smoking, and managing stress can significantly reduce your risk."
    },
    {
      question: "Is the assessment accurate?",
      answer: "Heart disease risk assessments provide estimates based on known risk factors. For a precise diagnosis, consult a doctor for tests like ECG or blood work."
    },
    {
      question: "What are the common symptoms of heart disease?",
      answer: "Common symptoms include chest pain, shortness of breath, fatigue, dizziness, and irregular heartbeats. However, some people may have no symptoms."
    },
    {
      question: "What are the key risk factors for heart disease?",
      answer: "Major risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, lack of physical activity, and a family history of heart disease."
    },
    {
      question: "Can stress contribute to heart disease?",
      answer: "Yes, chronic stress can increase blood pressure, lead to unhealthy habits like overeating or smoking, and negatively impact heart health."
    },
    {
      question: "How often should I get a heart disease risk assessment?",
      answer: "If you're at higher risk (due to age, family history, or health conditions), it's recommended to assess your heart health annually. Otherwise, every few years is sufficient."
    },
    {
      question: "Are there different types of heart disease?",
      answer: "Yes, common types include coronary artery disease, heart failure, arrhythmias, and congenital heart defects."
    },
    {
      question: "Can young people develop heart disease?",
      answer: "Yes, although it's more common in older adults, heart disease can affect young people, especially those with genetic predisposition or unhealthy lifestyles."
    },
    {
      question: "Does diet play a role in preventing heart disease?",
      answer: "Absolutely! A heart-healthy diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can reduce heart disease risk."
    },
    {
      question: "What exercises are best for heart health?",
      answer: "Cardio exercises like walking, running, cycling, and swimming, along with strength training, can improve heart health."
    },
    {
      question: "Can heart disease be reversed?",
      answer: "In some cases, lifestyle changes, medications, and procedures can improve heart health and reduce disease progression, but complete reversal depends on the condition."
    },
  ];
  
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('src/assets/images/bg7.jpg')" }} // Replace with correct path
    >
      <div className="max-w-4xl w-full bg-white bg-opacity-80 shadow-lg backdrop-blur-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">❓ Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common questions about heart disease risk assessments.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
              <button
                className="w-full p-4 flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 border-t border-gray-200 text-gray-700 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
