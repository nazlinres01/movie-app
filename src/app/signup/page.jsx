"use client"; // Mark as Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      setErrorMessage("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else if (!acceptTerms) {
      setErrorMessage("You must accept the terms and conditions.");
    } else {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          router.push("/dashboard"); // Redirect on successful signup
        } else {
          const result = await response.json();
          setErrorMessage(result.message || "Sign up failed.");
        }
      } catch (error) {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-700 dark:to-blue-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-lg sm:px-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Sign Up</h1>
            {errorMessage && (
              <div className="text-red-500 dark:text-red-400 mb-4">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUserCircle className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition duration-300"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition duration-300"
                />
              </div>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition duration-300"
                />
              </div>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition duration-300"
                />
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  className="form-checkbox text-green-500 dark:text-green-600"
                />
                <label className="text-gray-700 dark:text-gray-300">
                  I accept the{" "}
                  <a href="#" className="text-green-500 dark:text-green-400 hover:underline">
                    terms and conditions
                  </a>.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 dark:bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center">
              <a href="#" className="text-green-500 dark:text-green-400 hover:underline">
                Forgot your password?
              </a>
            </div>
            <div className="mt-4 text-center">
              <span className="text-gray-500 dark:text-gray-300">Already have an account?</span>
              <a href="/login" className="text-green-500 dark:text-green-400 hover:underline ml-2">
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
