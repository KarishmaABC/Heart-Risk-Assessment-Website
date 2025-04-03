import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./components/homepage";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Signup from "./components/signup";
import RiskAssessment from "./components/RiskAssessment";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks"; 
import UnderstandingResults from "./components/UnderstandingResults"; // ✅ Import UnderstandingResults
import Contact from "./components/Contact"; // Import Contact Page
import FAQ from "./components/FAQ"; //
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/assessment" element={<RiskAssessment />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/understanding-results" element={<UnderstandingResults />} /> {/* ✅ Add Route */}
          <Route path="/contact" element={<Contact />} /> {/* ✅ Add Contact Page Route */}
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
