import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full shadow-lg flex items-center justify-between px-8 py-4 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold">❤️Heart Health❤️</h1>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/how-it-works" className="hover:text-gray-200"> How It Works</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="/understanding-results" className="hover:text-gray-200">Understanding Results</Link> {/* ✅ Add link */}
        <Link to="/faq" className="hover:text-gray-200">FAQ</Link>
        {/* <a href="#blog" className="hover:text-gray-200"> Blog</a> */}
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link> {/* ✅ Add Contact Page Link */}

        {user && (
          <Link to="/assessment" className="hover:text-gray-200">📊 Risk Assessment</Link>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            🚪 Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-200">🔑 Login</Link>
            <Link to="/signup" className="hover:text-gray-200">📝 Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
