// import React, { useState } from "react";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [credentials, setcredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   });
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     // e.preventDefault()
//     e.preventDefault();
//     const { name, email, password } = credentials;
//     console.log("submitting auth token");
//     const response = await fetch("http://localhost:3005/api/auth", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     });
//     const json = await response.json();
//     console.log(json);

//     if (json.success === true) {
//       // Store token in cookie
//       localStorage.setItem("token", json.auth);
//       navigate("/");
//       Cookies.set("auth-token", json.auth, { expires: 7 }); // Expires in 7 days
//     }
//   };
//   const changeHandler = (e) => {
//     setcredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <div className="px-[42%] mt-8">
//         <form>
//           <div className="form-group w-72 justify-center ">
//             <label for="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               required
//               id="name"
//               name="name"
//               onChange={changeHandler}
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group w-72 justify-center ">
//             <label for="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               required
//               id="exampleInputEmail1"
//               name="email"
//               onChange={changeHandler}
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//             <small id="emailHelp" className="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </div>
//           <div className="form-group w-72">
//             <label for="password">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               required
//               id="password"
//               name="password"
//               onChange={changeHandler}
//               placeholder="Password"
//             />
//           </div>
//           <div className="form-group w-72">
//             <label for="cpassword">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               required
//               id="cpassword"
//               name="cpassword"
//               onChange={changeHandler}
//               placeholder="Password"
//             />
//           </div>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="btn btn-primary mt-7 w-[100%] mx-6"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (credentials.password !== credentials.cpassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3005/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();

      if (json.success) {
        toast.success("Sign Up Successful!", { position: "top-right" });
        setTimeout(() => navigate("/login"), 1500); // Redirect after 1.5s
      } else {
        toast.error(json.message || "Something went wrong. Please try again.", {
          position: "top-right",
        });
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
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="form-group"
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={credentials.name}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              placeholder="Enter your full name"
              required
            />
          </motion.div>

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

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="form-group"
          >
            <label
              htmlFor="cpassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={credentials.cpassword}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              placeholder="Confirm your password"
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
                Signing up...
              </span>
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
