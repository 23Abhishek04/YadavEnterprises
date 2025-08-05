// component/Form.jsx
"use client";

import { useState } from "react";

export default function Form({ to = "abhishekbamane23@gmail.com" }) {
  // Update your Email HERE
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

    // open mail client
    window.location.href = mailto;

    setSubmitted(true);
    // optional: reset after slight delay if desired
  };

  return (
    <div className="w-full mx-auto bg-white md:w-1/2">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium"></label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border  focus:outline-none focus:ring-1 focus:ring-[#6d4d42]"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium"></label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border  focus:outline-none focus:ring-1 focus:ring-[#6d4d42]"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
        {/* number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium"></label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border  focus:outline-none focus:ring-1 focus:ring-[#6d4d42]"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
        {/* description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium"
          ></label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="block w-full px-3 py-2 mt-1 border  resize-none focus:outline-none focus:ring-1 focus:ring-[#6d4d42]"
            placeholder="Tell us about your Project..."
          ></textarea>
          {errors.description && (
            <p className="mt-1 text-xs text-red-600">{errors.description}</p>
          )}
        </div>
        {/* send msg */}
        <button
          type="submit"
          className="w-[150px] py-2 font-medium text-white transition bg-[#6d4d42] hover:bg-[#6d4d4285]"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="mt-2 text-sm text-green-600">
          Mail client opened. If it didn’t, ensure popups or mail handlers are
          allowed.
        </p>
      )}
    </div>
  );
}
