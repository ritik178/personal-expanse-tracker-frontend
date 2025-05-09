import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-black/40 border border-[#3B82F6] shadow-[0_0_20px_#1e3a8a]"
      >
        <h2 className="text-3xl font-extrabold text-center font-style: italic text-[#3B82F6] mb-6">
          Create an Account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-left text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              placeholder="********"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-black font-semibold py-2 px-4 rounded-xl transition duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#3B82F6] hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
