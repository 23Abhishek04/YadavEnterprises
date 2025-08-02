// component/Form.jsx
"use client";

import { useState } from "react";

export default function Form({ to = "abhishekbamane23@gmail.com" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.description.trim()) e.description = "Description is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`New message from ${form.name}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Description:`,
      form.description,
    ];
    const body = encodeURIComponent(bodyLines.join("\n\n"));
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-lg p-5 mx-auto bg-white rounded-md shadow-sm">
      <h1 className="font-serif text-center text-[#6d4d42] font-medium text-2xl">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
        aria-describedby="form-status"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "error-name" : undefined}
            className={`block w-full px-4 py-3 rounded border transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-[#6d4d42] ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p
              id="error-name"
              className="mt-1 text-xs text-red-600"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={`block w-full px-4 py-3 rounded border transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-[#6d4d42] ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p
              id="error-email"
              className="mt-1 text-xs text-red-600"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-1 text-sm font-medium"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            className={`block w-full px-4 py-3 rounded border transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-[#6d4d42] ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p
              id="error-phone"
              className="mt-1 text-xs text-red-600"
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="mb-1 text-sm font-medium"
          >
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            aria-invalid={!!errors.description}
            aria-describedby={
              errors.description ? "error-description" : undefined
            }
            className={`block w-full px-4 py-3 rounded border resize-none transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-[#6d4d42] ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tell us about your project..."
          ></textarea>
          {errors.description && (
            <p
              id="error-description"
              className="mt-1 text-xs text-red-600"
              role="alert"
            >
              {errors.description}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 font-medium text-white rounded-md transition hover:brightness-105 bg-[#6d4d42] disabled:opacity-60"
          >
            Send Message
          </button>
          {submitted && (
            <p
              id="form-status"
              className="mt-1 text-sm text-green-600"
              role="status"
            >
              Mail client opened. If it didn’t, ensure mail handlers are
              allowed.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
