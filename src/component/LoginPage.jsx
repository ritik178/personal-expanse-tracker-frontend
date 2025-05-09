import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function LoginPage() {
  const [usernameOrEmail, setusernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // for redirect after login

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        usernameOrEmail,
        password
      });

      const token = response.data.accessToken;
       
      console.log(response.data);

      if (token) {
        localStorage.setItem('token', token); // Save token to localStorage
        console.log('Token saved to localStorage.');
      } else {
        console.error('Token is undefined.');
      }

      // Redirect to dashboard or expense page
      navigate('/dashboard'); // change this route as per your project
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="flex w-screen h-screen rounded-xl overflow-auto shadow-2xl border">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 bg-gradient-to-br from-blue-900 to-black flex flex-col justify-center items-center p-10"
        >
          <h1 className="text-4xl py-4 font-bold text-[#3B82F6] mb-4 font-style: italic">
            Personal Expense Tracker
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-md font-style: italic">
            Manage your finances effortlessly...
          </p>
        </motion.div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex items-center justify-center bg-black relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-black/40 border border-[#3B82F6] shadow-[0_0_20px_#1e3a8a]"
          >
            <h2 className="text-3xl font-extrabold font-style: italic text-center text-[#3B82F6] mb-6">
              Login to continue
            </h2>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-left text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  value={usernameOrEmail}
                  onChange={(e) => setusernameOrEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-left text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="***********"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-black font-semibold py-2 px-4 rounded-xl transition duration-300 transform hover:scale-105"
              >
                Log In
              </button>
            </form>

            <p className="text-sm text-center text-gray-400 mt-6">
              Don’t have an account?{" "}
              <Link to="/register" className="text-[#3B82F6] hover:underline">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


