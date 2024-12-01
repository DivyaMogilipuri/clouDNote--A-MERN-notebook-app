import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-96">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Your Notebook App
          </h1>
          <p className="text-lg mb-6">
            Organize your thoughts, track your progress, and stay productive
            with ease.
          </p>
          <Link
            to="/login"
            className="px-6 py-3 bg-purple-800 rounded-full text-lg font-semibold hover:bg-purple-900 transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r  from-purple-900 via-transparent to-indigo-900">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="bg-gradient-to-r hover:p-12 from-purple-600 via-purple-800 to-indigo-600 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl hover:rotate-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Organize Notes
              </h3>
              <p className="text-white">
                Keep your notes organized with easy-to-navigate categories and
                search functionality.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-purple-600 via-purple-800 to-indigo-600 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl hover:rotate-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Sync Across Devices
              </h3>
              <p className="text-white">
                Your notes are automatically synced across devices, ensuring you
                can access them anywhere.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-purple-600 via-purple-800 to-indigo-600 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl hover:rotate-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Secure & Private
              </h3>
              <p className="text-white">
                We prioritize your privacy and security to make sure your notes
                stay safe.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CloudNote. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
