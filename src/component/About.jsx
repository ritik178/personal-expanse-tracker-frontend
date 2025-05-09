import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <motion.div
        className="max-w-3xl bg-white p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Expense Tracker</h1>

        <p className="text-gray-700 mb-4">
          Welcome to the <span className="font-semibold">Personal Expense Tracker</span> — your smart
          solution to managing daily expenses with ease, clarity, and control.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">💡 What is this app?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>✅ Track your income and expenses</li>
          <li>📊 View monthly and category-wise spending</li>
          <li>🔒 Secure your financial data with user authentication</li>
          <li>🧾 Maintain better budgeting habits and awareness</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">🚀 Features:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>CRUD operations for expenses and categories</li>
          <li>User authentication & authorization</li>
          <li>Real-time data updates</li>
          <li>Filtering & searching transactions</li>
          <li>Clean and responsive UI</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">⚙️ Tech Stack:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Frontend: React.js + Tailwind CSS</li>
          <li>Backend: Spring Boot</li>
          <li>Database: MySQL</li>
          <li>API Docs: Swagger + Postman</li>
          <li>Security: Spring Security (JWT-based)</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">📈 Goal:</h2>
        <p className="text-gray-700">
          To help users take control of their finances by providing a fast, secure, and minimal
          interface that tracks expenses — from the smallest to the largest — in a structured,
          clean manner.
        </p>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm"
          >
            🔗 View GitHub Repo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
