import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddExpense = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    expanseDate: "",
    categoryDto: "",
  });

  const token = localStorage.getItem('token');
  const location = useLocation();
  const navigate = useNavigate();
  const editExpense = location.state?.expense || null;

  useEffect(() => {
    fetchCategories();

    if (editExpense) {
      setFormData({
        amount: editExpense.amount,
        expanseDate: editExpense.expanseDate,
        categoryDto: editExpense.categoryDto,
      });
    }
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories/getAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        amount: parseFloat(formData.amount),
        expanseDate: formData.expanseDate,
        categoryDto: formData.categoryDto,
      };

      if (editExpense) {
        // Update request
        await axios.put(`http://localhost:8080/api/expanse/update/${editExpense.id}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Expense updated successfully!", {
          onClose: () => navigate("/dashboard/getAll"),
          autoClose: 1500,
        });
      } else {
        // Add new request
        await axios.post("http://localhost:8080/api/expanse/post", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Expense added successfully!");
        setFormData({
          amount: "",
          expanseDate: "",
          categoryDto: "",
        });
      }

    } catch (error) {
      console.error("Error adding/updating expense:", error);
      toast.error("Failed to save expense.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">
        {editExpense ? "Edit Expense" : "Add New Expense"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Expense Date</label>
          <input
            type="date"
            name="expanseDate"
            value={formData.expanseDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="categoryDto"
            value={formData.categoryDto.id || ""}
            onChange={(e) => {
              const selectedCategory = categories.find(
                (cat) => cat.id.toString() === e.target.value
              );
              setFormData({ ...formData, categoryDto: selectedCategory });
            }}
            required
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
        >
          {editExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default AddExpense;


