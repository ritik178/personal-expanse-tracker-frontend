import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Manage Expenses", path: "/dashboard/expenses" },
    { name: "Get Expanse", path: "/dashboard/getAll"},
    { name: "Add Expense", path: "/dashboard/add-expense" },
    { name: "Manage Categories", path: "/dashboard/categories" },
    { name: "Monthly Summary", path: "/dashboard/mothly-summary" },
    { name: "Category operation", path: "/dashboard/category-crud" },
  ];

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`bg-black shadow-md p-6 flex flex-col transition-all duration-300 ${isCollapsed ? "w-0" : "w-50"}`}>
      {/* Toggle Button */}
      <div className="mb-8">
        <button
          onClick={handleToggle}
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          {/* Here you can place your own ICON */}
          <span className="text-3xl ">≡</span> {/* Simple icon for now */}
        </button>
      </div>

      {/* Sidebar Items */}
      {sidebarItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`mb-4 font-thin transition ${
            location.pathname === item.path ? "text-indigo-600 font-bold" : "text-white hover:text-indigo-600"
          } ${isCollapsed ? "text-center text-sm" : ""}`}
        >
          {isCollapsed ? "" : item.name} {/* If collapsed, only first letter */}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

