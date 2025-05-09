import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MonthlySummary = () => {
  const [summaryData, setSummaryData] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchMonthlySummary();
  }, []);

  const fetchMonthlySummary = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/expanse/monthly-summary", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSummaryData(response.data);
    } catch (error) {
      console.error("Error fetching monthly summary:", error);
      toast.error("Failed to load monthly summary.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Monthly Expense Summary</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Month</th>
              <th className="py-3 px-6 text-left">Year</th>
              <th className="py-3 px-6 text-left">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {summaryData.length > 0 ? (
              summaryData.map((item, index) => (
                <tr key={index} className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
                  <td className="py-3 px-6">{item.month}</td>
                  <td className="py-3 px-6">{item.year}</td>
                  <td className="py-3 px-6">₹{item.totalAmount.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlySummary;
