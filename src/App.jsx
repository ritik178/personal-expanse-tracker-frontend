import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import LoginPage from './component/LoginPage';
import Register from './component/Register';
import Body from './component/Body';
import Dashboard from "./component/DashBoard";
import ExpenseList from "./component/MainDashboard/ExpenseList";
import AddExpense from "./component/MainDashboard/AddExpense";
import EditExpense from "./component/MainDashboard/EditExpense";
import CategoryList from "./component/MainDashboard/CategoryList";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import MonthlySummary from "./component/MainDashboard/MonthlySummary";
import CategoryCrud from "./component/MainDashboard/CategoryCrud";
import About from "./component/About";
import { Contact } from "./component/Contact";
import ProtectedRoute from "./component/utils/ProtectedRoute";


function App() {
  return (
    <Router>
      <div className="min-h-screen max-h-screen overflow-auto">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={
            <ProtectedRoute >
            <Dashboard />
            </ProtectedRoute>
            } />
          <Route path="/dashboard/getAll" element={<ExpenseList />} />
          <Route path="/dashboard/add-expense" element={<AddExpense />} />
          <Route path="/dashboard/expenses" element={<EditExpense />} />
          <Route path="/dashboard/categories" element={<CategoryList />} />
          <Route path="/dashboard/mothly-summary" element={<MonthlySummary />} />
          <Route path="/dashboard/category-crud" element={<CategoryCrud />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

