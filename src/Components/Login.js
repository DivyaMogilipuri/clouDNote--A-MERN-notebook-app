// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

// //import { useHistory } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [credentials, setcredentials] = useState({ email: "", password: "" });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("submitting auth token");
//     const response = await fetch("http://localhost:3005/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     });
//     const json = await response.json();
//     console.log("This is from Login submit");

//     console.log(json);

//     if (json.success === true) {
//       localStorage.setItem("token", json.auth);
//       navigate("/");
//     }
//   };
//   console.log(localStorage.getItem("token"));

//   const changeHandler = (e) => {
//     setcredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   return (
//     <div className="px-[42%] mt-8">
//       <form>
//         <div className="form-group w-72 justify-center ">
//           <label for="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             name="email"
//             onChange={changeHandler}
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div className="form-group w-72">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             name="password"
//             onChange={changeHandler}
//             placeholder="Password"
//           />
//         </div>

//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="btn btn-primary mt-7 w-[100%] mx-6"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3005/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();

      if (json.success) {
        toast.success("Login Successful!", { position: "top-right" });
        localStorage.setItem("token", json.auth);
        setTimeout(() => navigate("/addnote"), 1500); // Redirect after 1.5s
      } else {
        toast.error("Invalid email or password.", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="form-group"
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="form-group"
          >
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              placeholder="Enter your password"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2 px-4 font-semibold text-white bg-purple-700 rounded-md shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                  ></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
