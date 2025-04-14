// 'use client'

// import { useState } from "react";

// interface ServiceRequestFormProps {
//   subServices: { id: number; name: string }[];
// }

// const ServiceRequestForm = ({ subServices }: ServiceRequestFormProps) => {
//   const [formData, setFormData] = useState({ subService: "", email: "", message: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Request a Service</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Sub Service Selection */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Service</label>
//           <select
//             name="subService"
//             value={formData.subService}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
//           >
//             <option value="">Choose a sub-service</option>
//             {subServices.map((sub) => (
//               <option key={sub.id} value={sub.name}>
//                 {sub.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Email Input */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
//             required
//           />
//         </div>

//         {/* Message Textarea */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
//             rows={4}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Submit Request
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ServiceRequestForm;
'use client';

import { useState, useEffect } from "react";

interface ServiceRequestFormProps {
  subServices: { id: number; name: string }[];
}

const ServiceRequestForm = ({ subServices }: ServiceRequestFormProps) => {
  const [formData, setFormData] = useState({ subService: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Auto-dismiss alerts after 3 seconds
  useEffect(() => {
    if (errorMessage || successMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
        setSuccessMessage('');
      }, 3000); // Adjust timeout as needed
      return () => clearTimeout(timer);
    }
  }, [errorMessage, successMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.subService || !formData.email || !formData.message) {
      setErrorMessage('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Failed to submit service request.');
        return;
      }

      setSuccessMessage(data.message);
      setFormData({ subService: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black dark:text-white mb-4">Request a Service</h3>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Sub Service Selection */}
        <div>
          <label className="block text-sm font-medium text-dark dark:text-white">Select Service</label>
          <select
            name="subService"
            value={formData.subService}
            onChange={handleChange}
            className="w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary"
          >
            <option value="">Choose a sub-service</option>
            {subServices.map((sub) => (
              <option key={sub.id} value={sub.name}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-dark dark:text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary"
            required
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary"
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
