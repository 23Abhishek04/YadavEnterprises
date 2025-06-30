"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData(e.target);

      const res = await fetch("/api/submit-form", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Form submitted successfully!");
        e.target.reset();
      } else {
        setMessage("❌ Failed: " + data.message);
      }
    } catch (err) {
      console.error("❌ Submit error:", err);
      setMessage("❌ Unexpected error. Check server log.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4">
      <input name="name" required placeholder="Full Name" className="w-full px-3 py-2 border" />
      <input name="email" type="email" required placeholder="Email" className="w-full px-3 py-2 border" />
      <input type="file" name="image" required className="w-full" />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 text-white bg-yellow-600 rounded"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {message && <p className="text-sm text-center text-red-600">{message}</p>}
    </form>
  );
}
