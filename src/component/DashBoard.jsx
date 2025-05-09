import DashboardLayout from "./MainDashboard/DashboardLayout";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { Wallet, Calendar, PieChart as PieChartIcon, BarChart3 } from "lucide-react";

function Dashboard() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [monthlySummary, setMonthlySummary] = useState([]);
  const [categorySummary, setCategorySummary] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTotalExpense();
    fetchMonthlySummary();
    fetchCategorySummary();
  }, []);

  const fetchTotalExpense = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/expanse/total", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTotalExpense(res.data || 0);
    } catch (error) {
      console.error("Error fetching total expense:", error);
      toast.error("Failed to fetch total expense.");
    }
  };

  const fetchMonthlySummary = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/expanse/monthly-summary", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMonthlySummary(res.data || []);
    } catch (error) {
      console.error("Error fetching monthly summary:", error);
      toast.error("Failed to fetch monthly summary.");
    }
  };

  const fetchCategorySummary = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/expanse/category-summary", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategorySummary(res.data || []);
    } catch (error) {
      console.error("Error fetching category summary:", error);
      toast.error("Failed to fetch category summary.");
    }
  };

  const COLORS = ["#6366F1", "#34D399", "#FBBF24", "#F87171", "#60A5FA", "#F472B6", "#A78BFA"];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-3xl md:text-4xl font-extrabold text-gray-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Your Dashboard 
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Total Expense Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow-2xl ring-1 ring-blue-300/40 transition-all duration-300 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <Wallet size={22} />
              <h3 className="text-lg font-semibold">Total Expense</h3>
            </div>
            <p className="text-3xl font-bold">₹ {totalExpense.toFixed(2)}</p>
          </motion.div>

          {/* Last Month Expense */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 rounded-2xl shadow-2xl ring-1 ring-green-300/40 transition-all duration-300 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <Calendar size={22} />
              <h3 className="text-lg font-semibold">Last Month Expense</h3>
            </div>
            <p className="text-3xl font-bold">
              ₹ {monthlySummary.length > 0 ? monthlySummary[monthlySummary.length - 1].totalAmount.toFixed(2) : "0.00"}
            </p>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <PieChartIcon size={20} className="text-indigo-500" />
              <h3 className="text-lg font-semibold text-gray-700">Expenses by Category</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categorySummary}
                  dataKey="totalAmount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#6366F1"
                  label
                >
                  {categorySummary.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e5e7eb' }} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 size={20} className="text-indigo-500" />
              <h3 className="text-lg font-semibold text-gray-700">Monthly Expense Trend</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySummary}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e5e7eb' }} />
                <Legend />
                <Bar dataKey="totalAmount" fill="#6366F1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;



