import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const isDashboardPage = location.pathname.startsWith("/dashboard");

  if (isDashboardPage) {
    // Show dashboard style header
    return (
      <header className="bg-gray-400 shadow-md p-4 px-8  flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">
          💸 ExpenseTracker
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
        >
          Logout
        </button>
      </header>
    );
  }

  // Default Header for home/login/register
  return (
    <header className="bg-white shadow-md p-4 px-8 rounded-xl flex justify-between items-center w-full">
      {/* Logo */}
      <div className="text-xl font-bold text-indigo-600">
        💸 ExpenseTracker
      </div>

      {/* Nav Links */}
      <nav className="flex gap-6">
        <Link to="/about" className={`text-gray-700 font-medium hover:text-indigo-600 transition ${location.pathname === '/about' ? "border-b-2 border-indigo-600 pb-1" : ""}`}>
          About
        </Link>
        <Link to="/contact" className={`text-gray-700 font-medium hover:text-indigo-600 transition ${location.pathname === '/contact' ? "border-b-2 border-indigo-600 pb-1" : ""}`}>
          Contact
        </Link>
      </nav>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
          Login
        </Link>
        <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
