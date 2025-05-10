'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [sqft, setSqft] = useState('');
  const ratePerSqft = 75;
  const estimatedPrice = Number(sqft) * ratePerSqft;

  return (
    <div className="max-w-sm p-6 mx-auto mt-10 bg-white shadow-lg rounded-2xl">
      <h2 className="mb-4 text-xl font-semibold text-center">Get Your Quote</h2>
      <label className="block mb-2 text-gray-700">Enter Area (sqft):</label>
      <input
        type="number"
        value={sqft}
        onChange={(e) => setSqft(e.target.value)}
        placeholder="e.g., 1000"
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <div className="text-lg font-medium text-gray-800">
        Estimated Price: <span className="font-bold text-green-600">₹{estimatedPrice || 0}</span>
      </div>
    </div>
  );
}
