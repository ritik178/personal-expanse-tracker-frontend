import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        await axios.delete(`http://localhost:8080/api/expanse/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Expense deleted successfully!");
        setExpenses((prevExpenses) => prevExpenses.filter(exp => exp.id !== id));
      } catch (error) {
        console.error("Failed to delete expense:", error);
        toast.error("Failed to delete expense!");
      }
    }
  };

  const fetchExpenses = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/expanse/getAll", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch expenses");
      }

      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleEdit = (expense) => {
    navigate("/dashboard/add-expense", { state: { expense } });
  };

  const handleAddExpense = () => {
    navigate("/dashboard/add-expense");
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">All Expenses</h2>
        <button
          onClick={handleAddExpense}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-200 shadow-md"
        >
          + Add New Expense
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 border-b text-left font-semibold text-gray-600">Amount</th>
              <th className="py-3 px-6 border-b text-left font-semibold text-gray-600">Expense Date</th>
              <th className="py-3 px-6 border-b text-left font-semibold text-gray-600">Category</th>
              <th className="py-3 px-6 border-b text-left font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-6 border-b">{expense.amount}</td>
                  <td className="py-4 px-6 border-b">{expense.expanseDate}</td>
                  <td className="py-4 px-6 border-b">{expense.categoryDto.name}</td>
                  <td className="py-4 px-6 border-b">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleEdit(expense)}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(expense.id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No expenses found. Add some!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
