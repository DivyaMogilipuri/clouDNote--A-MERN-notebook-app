import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-white body-font">
        {/* About CloudNote Section */}
        <div className="container px-6 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200">
            <div className="sm:w-32 sm:h-32 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white shadow-lg mb-6 lg:mb-0">
              {/* Add an appropriate icon or image */}
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow text-center sm:text-left mt-6 sm:mt-0 bg-gradient-to-r from-indigo-800 via-transparent to-purple-900 p-6">
              <h2 className="text-white text-4xl font-extrabold mb-6 tracking-wide leading-tight ">
                About CloudNote
              </h2>
              <p className="leading-relaxed text-base font-light ">
                CloudNote is a secure, cross-platform note-taking application
                that empowers users to organize, store, and share their thoughts
                with ease. With features like user authentication, encrypted
                cloud storage, and real-time synchronization, CloudNote ensures
                that your notes are always safe, accessible, and up-to-date
                across all devices. The platform prioritizes data privacy and
                offers tools for seamless collaboration, backup, and version
                control, making it the perfect solution for users who value
                organization and security.
              </p>
              <a
                href="/"
                className="mt-6 inline-flex items-center text-indigo-300 hover:text-indigo-100 transition duration-300"
              >
                Learn More
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Login Protection Section */}
          <div className="flex flex-col lg:flex-row items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200">
            <div className="flex-grow text-center sm:text-left mt-6 sm:mt-0 bg-gradient-to-r  from-purple-900 via-transparent to-indigo-800 p-6 rounded-2xl">
              <h2 className="text-white text-4xl font-extrabold mb-6 tracking-wide leading-tight">
                Login Protection
              </h2>
              <p className="leading-relaxed text-base font-light">
                CloudNote provides robust login protection to ensure that your
                personal notes and data are secure. Features like two-factor
                authentication (2FA), encrypted passwords, and session
                management ensure that unauthorized access is prevented. Our
                focus on security helps you trust that your data is always
                protected.
              </p>
              <a
                href="/"
                className="mt-6 inline-flex items-center text-indigo-500 hover:text-indigo-400 transition duration-300"
              >
                Learn About Security
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="sm:w-32 sm:h-32 h-24 w-24 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white shadow-lg mt-6 lg:mt-0">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 12l2-2m-2 2l-2-2M12 12l2 2m-2-2l-2 2m0-2h8m0 0l-3 3m3-3l-3-3m-3 0h-8m8 0l-3-3m-3 3l3 3"></path>
              </svg>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="flex flex-col lg:flex-row items-center lg:w-4/5 mx-auto">
            <div className="sm:w-32 sm:h-32 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white shadow-lg mb-6 lg:mb-0">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow text-center sm:text-left mt-6 sm:mt-0 bg-gradient-to-r   from-indigo-800 via-transparent to-purple-900 p-6 rounded-xl">
              <h2 className="text-white text-4xl font-extrabold mb-6 tracking-wide leading-tight">
                Our Mission
              </h2>
              <p className="leading-relaxed text-base font-light">
                Our mission at CloudNote is to provide users with an
                easy-to-use, secure, and reliable platform for note-taking. We
                are committed to simplifying the process of organizing and
                managing your ideas while maintaining the highest standards of
                privacy and security.
              </p>
              <a
                href="/"
                className="mt-6 inline-flex items-center text-indigo-500 hover:text-indigo-400 transition duration-300"
              >
                Join Us
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Button for CTA */}
          <div className="text-center mt-20 ">
            <button className="text-white bg-indigo-800 hover:bg-indigo-600 border-0 py-3 px-10 rounded-lg text-xl shadow-lg transition duration-300 transform hover:scale-105">
              Start Using CloudNote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
