import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Cloud Icon with animation */}
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex justify-center items-center shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 16C6 14.3431 7.34315 13 9 13C9.46957 13 9.92172 13.1054 10.2929 13.2929C10.9792 11.9377 12.6102 11 14.5 11C16.432 11 18 12.568 18 14.5C18 16.432 16.432 18 14.5 18H9C7.34315 18 6 16.6569 6 16Z"
          />
        </svg>
      </div>

      {/* Text for CloudNote with animation */}
      <div className="text-3xl font-bold text-white dark:text-white transition-all duration-500 transform hover:translate-x-2 hover:text-blue-600">
        clou
        <span className="text-gradient text-purple-900  font-extrabold">
          DN
        </span>
        ote
      </div>
    </div>
  );
};

export default Logo;
