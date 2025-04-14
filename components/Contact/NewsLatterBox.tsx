"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-dismiss the alert after 3 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!name || !email) {
      setErrorMessage('Both name and email are required.');
      return;
    }
  
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
  
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Check if the response contains an error message from the backend
        setErrorMessage(data.error || 'Failed to subscribe.');
        return;
      }
  
      setSuccessMessage(data.message);
      setName('');
      setEmail('');
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Alerts */}
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Error!</span> {errorMessage}
        </div>
      )}
      {successMessage && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Success!</span> {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          required
        />
        <button
          type="submit"
          className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
        <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </form>
    </div>
  );
};

export default NewsLatterBox;
