"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // In production, connect to backend, email service, or database here
    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Have questions, suggestions, or feedback? Feel free to reach out.
        </p>

        {submitted ? (
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-6 rounded-lg">
            ✅ Thank you! Your message has been submitted.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 text-left"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:text-white"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:text-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:text-white"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;;
