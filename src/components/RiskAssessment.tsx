import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

interface FormData {
  name: string;
  dob: string;
  age: number;
  gender: string;
  contact: string;
  address: string;
  previousHeartDisease: boolean;
  heartDiseaseDetails: string;
  familyHistory: boolean;
  familyHistoryDetails: string;
  medicalConditions: string;
  smokingStatus: string;
  packYears: string;
  physicalActivity: number;
  dietaryHabits: string;
  alcoholConsumption: number;
  systolicBP: number;
  diastolicBP: number;
  height: number;
  weight: number;
  waistCircumference: number;
  bmi: number;
  totalCholesterol: number;
  ldlCholesterol: number;
  hdlCholesterol: number;
  triglycerides: number;
  fastingBloodGlucose: number;
  tenYearRiskScore: string;
  riskCategory: string;
  riskMessage?: string;
  treatment?: string[];
  medicines?: string[];
}

function HeartRiskForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dob: '',
    age: 0,
    gender: '',
    contact: '',
    address: '',
    previousHeartDisease: false,
    heartDiseaseDetails: '',
    familyHistory: false,
    familyHistoryDetails: '',
    medicalConditions: '',
    smokingStatus: '',
    packYears: '',
    physicalActivity: 0,
    dietaryHabits: '',
    alcoholConsumption: 0,
    systolicBP: 120,
    diastolicBP: 80,
    height: 170,
    weight: 70,
    waistCircumference: 80,
    bmi: 24.2,
    totalCholesterol: 200,
    ldlCholesterol: 100,
    hdlCholesterol: 50,
    triglycerides: 150,
    fastingBloodGlucose: 100,
    tenYearRiskScore: '',
    riskCategory: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  


  const calculateRisk = () => {
    let riskScore = 0;

    if (formData.age >= 45 && formData.age < 55) riskScore += 2;
    if (formData.age >= 55 && formData.age < 65) riskScore += 4;
    if (formData.age >= 65) riskScore += 6;

    if (formData.systolicBP >= 130 && formData.systolicBP < 140) riskScore += 1;
    if (formData.systolicBP >= 140 && formData.systolicBP < 160) riskScore += 3;
    if (formData.systolicBP >= 160) riskScore += 5;

    if (formData.totalCholesterol >= 200 && formData.totalCholesterol < 240) riskScore += 2;
    if (formData.totalCholesterol >= 240) riskScore += 4;
    if (formData.ldlCholesterol >= 130 && formData.ldlCholesterol < 160) riskScore += 2;
    if (formData.ldlCholesterol >= 160) riskScore += 4;
    if (formData.hdlCholesterol < 40) riskScore += 2;

    if (formData.triglycerides >= 150 && formData.triglycerides < 200) riskScore += 1;
    if (formData.triglycerides >= 200) riskScore += 3;

    if (formData.fastingBloodGlucose >= 100 && formData.fastingBloodGlucose < 126) riskScore += 2;
    if (formData.fastingBloodGlucose >= 126) riskScore += 4;

    if (formData.smokingStatus === 'Current smoker') riskScore += 5;
    if (formData.familyHistory) riskScore += 3;
    if (formData.bmi >= 25 && formData.bmi < 30) riskScore += 2;
    if (formData.bmi >= 30) riskScore += 4;

    let riskCategory = 'Low Risk';
let riskMessage = 'Your risk level is low. Maintain a healthy lifestyle.';
let treatment: string[] | null = null;
let medicines: string[] | null = null;

if (riskScore >= 6 && riskScore < 10) {
  riskCategory = 'Moderate Risk';
  riskMessage = 'Your risk is moderate. Consulting a healthcare professional is essential for personalized treatment and guidance. While lifestyle modifications and medications can help manage risk factors, a doctor’s recommendation ensures the most effective and safe approach tailored to your specific health needs.';
  treatment = [
    'Adopt a heart-healthy diet',
    'Exercise regularly',
    'Monitor your blood pressure & cholesterol'
  ];
  medicines = [
    'Statins (e.g., Atorvastatin, Rosuvastatin) - for cholesterol control',
    'Antihypertensives (e.g., Amlodipine, Lisinopril) - for blood pressure management',
    'Low-dose Aspirin - if recommended by a doctor'
  ];
}

if (riskScore >= 10 && riskScore < 15) {
  riskCategory = 'High Risk';
  riskMessage = 'High risk! Immediate lifestyle changes are required. Consulting a healthcare professional is essential for personalized treatment and guidance. While lifestyle modifications and medications can help manage risk factors, a doctor’s recommendation ensures the most effective and safe approach tailored to your specific health needs.';
  treatment = [
    'Strict diet plan',
    'Regular medical check-ups',
    'Consider prescribed medications'
  ];
  medicines = ['Statins', 'Blood Pressure Medications'];
}

if (riskScore >= 15) {
  riskCategory = 'Very High Risk';
  riskMessage = 'Very high risk! Seek immediate medical attention. Consulting a healthcare professional is essential for personalized treatment and guidance. While lifestyle modifications and medications can help manage risk factors, a doctor’s recommendation ensures the most effective and safe approach tailored to your specific health needs.';
  treatment = [
    'Intensive lifestyle modifications',
    'Frequent medical monitoring'
  ];
  medicines = ['Statins', 'Beta-blockers', 'Antiplatelet drugs'];
}


    setFormData((prev) => ({
      ...prev,
      tenYearRiskScore: riskScore.toString(),
      riskCategory,
      riskMessage,
      treatment: treatment || [],
      medicines: medicines || [],
    }));
  };
  const generatePDF = async () => {
    const element = document.getElementById("report");
  
    if (!element) {
      alert("Error: Report element not found! Ensure the report is visible.");
      return;
    }
  
    try {
      const canvas = await html2canvas(element, { 
        scale: 2, 
        useCORS: true, 
        logging: true
      });
  
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
  
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Health_Risk_Report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Check console for details.");
    }
  };
  
  



  return (
    <div className="min-h-screen bg-gray-100 pt-24 py-15 px-4 sm:px-6 lg:px-8">
  <div className=" bg-white bg-opacity-10 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <div className="text-center mb-6">
      
      <Heart className=" bg-white bg-opacity-10 h-12 w-12 text-red-500 mx-auto" />
      <h2 className="text-2xl font-bold text-gray-900">Heart Disease Risk Assessment</h2>
    </div>

        <form className="space-y-6">
          
          {/* Personal Information */}
          <fieldset className="border border-gray-300 p-6 rounded-lg shadow-xl bg-white">
  <legend className="font-bold text-xl text-gray-700">📝 Personal Information</legend>
  <div className="space-y-6 mt-4">

    {/* Name */}
    <div className="flex flex-col">
      <label className="text-lg font-medium text-gray-700">👤 Name:</label>
      <input 
        type="text" 
        name="name" 
        className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm" 
        placeholder="Enter your name" 
        onChange={handleInputChange} 
      />
    </div>

    {/* Date of Birth & Age */}
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="text-lg font-medium text-gray-700">🎂 Date of Birth:</label>
        <input 
          type="date" 
          name="dob" 
          className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm" 
          onChange={handleInputChange} 
        />
      </div>

      <div>
        <label className="text-lg font-medium text-gray-700">🎯 Age:</label>
        <input 
          type="number" 
          name="age" 
          className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm" 
          placeholder="Enter your age" 
          onChange={handleInputChange} 
        />
      </div>
    </div>

    {/* Gender Selection with Pretty Checkboxes */}
    <div>
      <label className="text-lg font-medium text-gray-700">⚧️ Gender:</label>
      <div className="flex gap-6 mt-3">
        {[
          { label: "Male", value: "Male", color: "border-blue-500 peer-checked:bg-blue-500" },
          { label: "Female", value: "Female", color: "border-pink-500 peer-checked:bg-pink-500" },
          { label: "Other", value: "Other", color: "border-purple-500 peer-checked:bg-purple-500" }
        ].map((option, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="gender"
              value={option.value}
              className="hidden peer"
              onChange={handleInputChange}
            />
            <div className={`w-6 h-6 border-2 ${option.color} rounded-md flex items-center justify-center transition-all`}>
              <span className="hidden peer-checked:block text-white">✅</span>
            </div>
            <span className="text-gray-800">{option.label}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Contact Number */}
    <div className="flex flex-col">
      <label className="text-lg font-medium text-gray-700">📞 Contact Number:</label>
      <input 
        type="tel" 
        name="contact" 
        className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm" 
        placeholder="Enter phone number" 
        onChange={handleInputChange} 
      />
    </div>

    {/* Address */}
    <div className="flex flex-col">
      <label className="text-lg font-medium text-gray-700">🏠 Address:</label>
      <textarea 
        name="address" 
        className="w-full border border-gray-300 rounded-md p-2 mt-2 h-20 focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-sm" 
        placeholder="Enter your address" 
        onChange={handleInputChange}
      ></textarea>
    </div>

  </div>
</fieldset>



          {/* Medical History */}
          <fieldset className="border border-gray-300 p-6 rounded-lg shadow-xl bg-white">
  <legend className="font-bold text-xl text-gray-700">🩺 Medical History</legend>
  <div className="space-y-6 mt-4">

    {/* Previous Heart Disease Diagnosis */}
    <div>
      <label className="text-lg font-medium text-gray-700">❤️ Previous Heart Disease Diagnosis:</label>
      <div className="flex gap-6 mt-3">
        {[
          { label: "Yes", value: "Yes", color: "border-green-500 peer-checked:bg-green-500" },
          { label: "No", value: "No", color: "border-red-500 peer-checked:bg-red-500" }
        ].map((option, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="heartDisease"
              value={option.value}
              className="hidden peer"
              onChange={handleInputChange}
            />
            <div className={`w-6 h-6 border-2 ${option.color} rounded-md flex items-center justify-center transition-all`}>
              <span className="hidden peer-checked:block text-white">✅</span>
            </div>
            <span className="text-gray-800">{option.label}</span>
          </label>
        ))}
      </div>
      <input
        type="text"
        name="heartDiseaseDetails"
        className="w-full border border-gray-300 rounded-md p-2 mt-3 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
        placeholder="If yes, please specify..."
        onChange={handleInputChange}
      />
    </div>

    {/* Family History of Heart Disease */}
    <div>
      <label className="text-lg font-medium text-gray-700">👨‍👩‍👧‍👦 Family History of Heart Disease:</label>
      <div className="flex gap-6 mt-3">
        {[
          { label: "Yes", value: "Yes", color: "border-green-500 peer-checked:bg-green-500" },
          { label: "No", value: "No", color: "border-red-500 peer-checked:bg-red-500" }
        ].map((option, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="familyHeartDisease"
              value={option.value}
              className="hidden peer"
              onChange={handleInputChange}
            />
            <div className={`w-6 h-6 border-2 ${option.color} rounded-md flex items-center justify-center transition-all`}>
              <span className="hidden peer-checked:block text-white">✅</span>
            </div>
            <span className="text-gray-800">{option.label}</span>
          </label>
        ))}
      </div>
      <input
        type="text"
        name="familyHeartDiseaseDetails"
        className="w-full border border-gray-300 rounded-md p-2 mt-3 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        placeholder="If yes, please specify..."
        onChange={handleInputChange}
      />
    </div>

    {/* Existing Medical Conditions */}
    <div>
      <label className="text-lg font-medium text-gray-700">⚕️ Existing Medical Conditions:</label>
      <textarea
        name="existingConditions"
        className="w-full border border-gray-300 rounded-md p-2 mt-2 h-20 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
        placeholder="Enter medical conditions (e.g., diabetes, hypertension)..."
        onChange={handleInputChange}
      ></textarea>
    </div>

  </div>
</fieldset>



          {/* Lifestyle Factors */}
          <fieldset className="border border-gray-300 p-6 rounded-lg shadow-xl bg-white">
  <legend className="font-bold text-xl text-gray-700">🌿 Lifestyle Factors</legend>
  <div className="space-y-6 mt-4">

    {/* Smoking Status */}
    <div>
      <label className="text-lg font-medium text-gray-700">🚬 Smoking Status:</label>
      <div className="flex flex-wrap gap-4 mt-3">
        {[
          { label: "Never smoked", value: "Never smoked", color: "border-blue-500 peer-checked:bg-blue-500" },
          { label: "Former smoker", value: "Former smoker", color: "border-yellow-500 peer-checked:bg-yellow-500" },
          { label: "Current smoker", value: "Current smoker", color: "border-red-500 peer-checked:bg-red-500" }
        ].map((option, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="smokingStatus"
              value={option.value}
              className="hidden peer"
              onChange={handleInputChange}
            />
            <div className={`w-6 h-6 border-2 ${option.color} rounded-md flex items-center justify-center transition-all`}>
              <span className="hidden peer-checked:block text-white">✅</span>
            </div>
            <span className="text-gray-800">{option.label}</span>
          </label>
        ))}
      </div>
      <input
        type="text"
        name="packYears"
        className="w-full border border-gray-300 rounded-md p-2 mt-3 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        placeholder="If former or current smoker, indicate pack-years..."
        onChange={handleInputChange}
      />
    </div>

    {/* Physical Activity Level */}
    <div>
      <label className="text-lg font-medium text-gray-700">🏃 Physical Activity Level (hours per week):</label>
      <input
        type="number"
        name="physicalActivity"
        className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
        placeholder="Enter hours per week..."
        onChange={handleInputChange}
      />
    </div>

    {/* Dietary Habits */}
    <div>
      <label className="text-lg font-medium text-gray-700">🥗 Dietary Habits:</label>
      <textarea
        name="dietaryHabits"
        className="w-full border border-gray-300 rounded-md p-2 mt-2 h-20 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
        placeholder="Describe your diet..."
        onChange={handleInputChange}
      ></textarea>
    </div>

    {/* Alcohol Consumption */}
    <div>
      <label className="text-lg font-medium text-gray-700">🍷 Alcohol Consumption (units per week):</label>
      <input
        type="number"
        name="alcoholConsumption"
        className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-red-400 focus:outline-none shadow-sm"
        placeholder="Enter units per week..."
        onChange={handleInputChange}
      />
    </div>

  </div>
</fieldset>


           {/* Physical Examination */}
{/* Physical Examination */}
{/* Physical Examination */}
<fieldset className="border border-gray-300 p-6 rounded-lg shadow-xl bg-white">
  <legend className="font-bold text-xl text-gray-700">🩺 Physical Examination</legend>
  <div className="space-y-6 mt-4">
    {[
      { label: "📊 Systolic BP (mm Hg):", name: "systolicBP" },
      { label: "📊 Diastolic BP (mm Hg):", name: "diastolicBP" },
      { label: "📏 Height (cm):", name: "height" },
      { label: "⚖️ Weight (kg):", name: "weight" },
      { label: "📐 Waist Circumference (cm):", name: "waist" },
      { label: "🧮 BMI:", name: "bmi" }
    ].map((field, index) => (
      <div key={index} className="flex flex-col">
        <label className="text-lg font-medium text-gray-700">{field.label}</label>
        <input
          type="text"
          name={field.name}
          className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          onChange={handleInputChange}
          placeholder={`Enter ${field.label.replace(/📊|📏|⚖️|📐|🧮/g, "").trim()}...`}
        />
      </div>
    ))}
  </div>
</fieldset>

{/* Blood Test Results */}
<fieldset className="border border-gray-300 p-6 rounded-lg shadow-xl bg-white mt-6">
  <legend className="font-bold text-xl text-gray-700">🩸 Blood Test Results</legend>
  <div className="space-y-6 mt-4">
    {[ 
      { label: "🧪 Total Cholesterol (mg/dL):", name: "totalCholesterol" },
      { label: "🧪 LDL Cholesterol (mg/dL):", name: "ldlCholesterol" },
      { label: "🧪 HDL Cholesterol (mg/dL):", name: "hdlCholesterol" },
      { label: "🧪 Triglycerides (mg/dL):", name: "triglycerides" },
      // { label: "🧪 Fasting Blood Glucose (mg/dL):", name: "fastingGlucose" },
      { label: "🧪 Systolic Blood Pressure (mmHg):", name: "bloodPressure" },
      { label: "🧪 Resting Heart Rate (bpm):", name: "heartRate" },
      { label: "🧪 Fasting Blood Sugar (mg/dL):", name: "fastingBloodSugar" }
    ].map((field, index) => (
      <div key={index} className="flex flex-col">
        <label className="text-lg font-medium text-gray-700">{field.label}</label>
        <input
          type="number"
          name={field.name}
          className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-red-400 focus:outline-none shadow-sm"
          onChange={handleInputChange}
          placeholder={`Enter ${field.label.replace(/🧪|🩸/g, "").trim()}...`}
        />
      </div>
    ))}
    <div>
      <label className="block text-lg font-medium text-gray-700">🩺 Chest Pain Type</label>
      <select
        name="chestPainType"
        value={formData.chestPainType}
        onChange={handleInputChange}
        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
      >
        <option value="typical">Typical Angina</option>
        <option value="atypical">Atypical Angina</option>
        <option value="nonAnginal">Non-Anginal Pain</option>
        <option value="asymptomatic">Asymptomatic</option>
      </select>
    </div>
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        name="exerciseAngina"
        checked={formData.exerciseAngina}
        onChange={handleInputChange}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label className="ml-2 text-lg text-gray-700">🚴 Exercise-Induced Angina</label>
    </div>
  </div>
</fieldset>


      {formData.riskCategory && (
  <div id="report" className="mt-4 p-4 bg-gray-100 rounded-md">
    <h3 className="text-lg font-semibold">Risk Assessment:</h3>
    <p><strong>Score:</strong> {formData.tenYearRiskScore}</p>
    <p><strong>Category:</strong> {formData.riskCategory}</p>
    <p className="mt-2">{formData.riskMessage}</p>

    {formData.treatment && (
      <div className="mt-2">
        <h4 className="font-semibold">Recommended Treatment:</h4>
        <ul className="list-disc list-inside">
          {formData.treatment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {formData.medicines && (
      <div className="mt-2">
        <h4 className="font-semibold">Suggested Medicines:</h4>
        <ul className="list-disc list-inside">
          {formData.medicines.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}
      

      

      





        </form>
        <div className="flex justify-center gap-4 mt-6">
  <button
    type="button"
    onClick={calculateRisk}
    className="bg-red-500 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300"
  >
    Calculate Risk
  </button>

  <button
    onClick={generatePDF}
    className="bg-blue-500 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
  >
    Download Report
  </button>
</div>
        
        
        
        
      </div>
    </div>
  );
}

export default HeartRiskForm;
