import React from 'react';
import { dashboardImage, analyticsImage, budgetImage } from './utils/Constants';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

const Body = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login')
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="flex-grow overflow-y-auto py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">

          {/* 💬 Main Welcome Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-indigo-700 font-style: italic mb-4">
              Welcome to Personal Expense Tracker
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get insights into your spending habits, track your budget, and stay in control of your finances.
              Manage your money better — all in one place.
            </p>
          </div>

          {/* 🔢 Step-by-Step + 📸 Image Collage */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-16 bg-gray-100">
          {/* Left - Steps */}
          <div className="md:w-1/2 space-y-10">
           {[
            {
            number: "1",
        title: "Track Your Expenses",
        desc: "Easily log and categorize your daily expenses.",
      },
      {
        number: "2",
        title: "Visualize Your Spending",
        desc: "Use charts and reports to understand your habits.",
      },
      {
        number: "3",
        title: "Set Budgets & Save More",
        desc: "Define monthly limits and track progress with ease.",
      },
    ].map((step, index) => (
      <div key={index} className="flex items-start gap-4">
        <div className="text-3xl font-bold text-indigo-600">{step.number}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
          <p className="text-gray-600">{step.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Right - Image Collage */}
  <div className="md:w-1/2 grid grid-cols-2 gap-4">
    <img
      src={dashboardImage}
      alt="Dashboard"
      className="rounded-xl shadow-lg w-full"
    />
    <img
      src={analyticsImage}
      alt="Analytics"
      className="rounded-xl shadow-lg w-full translate-y-6"
    />
    <img
      src={budgetImage}
      alt="Budget"
      className="rounded-xl shadow-lg w-full col-span-2 translate-y-2"
    />
  </div>
</div>


          {/* 📧 User Choices Section */}
          <div className="bg-gray-100 rounded-xl shadow-md p-2 max-w-6xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">I want to:</h2>

            {/* Option Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
                <p className="text-gray-700 font-medium text-center">
                  Organize my own expenses
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
                <p className="text-gray-700 font-medium text-center">
                  Manage expenses for a small team (1-9 employees)
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
                <p className="text-gray-700 font-medium text-center">
                  Control expenses for a larger organization (10+ employees)
                </p>
              </div>
            </div>

            {/* Email Input and Get Started Section */}
            <div className="text-center mt-6">
              <p className="text-lg text-gray-600 mb-4">Please select a choice above.</p>

              {/* Email/Phone Input */}
              <div className="max-w-md mx-auto mb-4">
                <input
                  type="email"
                  placeholder="Enter your email or phone number"
                  className="w-full p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-center gap-4">
                <button onClick={handleClick} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg cursor-pointer text-sm font-medium">
                  Get Started
                </button>
                <Link to="/login" className="text-gray-600">Or get started with</Link>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-sm font-medium">
                  Sign Up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

