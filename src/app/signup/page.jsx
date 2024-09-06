"use client"; // Mark as Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserAlt, FaLock } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please fill in both fields.");
    } else {
      // Handle sign-up logic here (e.g., API call for registration)
      setErrorMessage("");
      // Assuming sign-up is successful, redirect to dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:px-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 mb-8">Sign Up</h1>
            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
              </div>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center">
              <a href="#" className="text-green-500 hover:underline">
                Forgot your password?
              </a>
            </div>
            <div className="mt-4 text-center">
              <span className="text-gray-500">Already have an account?</span>
              <a href="/login" className="text-green-500 hover:underline ml-2">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
