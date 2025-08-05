'use client';
import { useState } from 'react';

export default function CostEstimator() {
  const [sqft, setSqft] = useState('');
  const [showError, setShowError] = useState(false);

  const estimatedPrice = sqft >= 10 ? sqft * 100 : 0;

  const handleChange = (e) => {
    const value = e.target.value;
    setSqft(value);

    // Validate: must be a number and at least 10
    if (value === '' || parseInt(value) < 10) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div className="bg-[#efebe9] w-full h-auto flex flex-col px-6 border-t border-[#DDA325] font-serif items-center  ">
      <h2 className="text-lg text-[#6d4d42]">Receive a Rough Cost Estimate</h2>

      <label className="block text-[#6d4d42]">Enter Area (sqft)</label>
      <input
        type="number"
        value={sqft}
        onChange={handleChange}
        placeholder="e.g, 1000"
        className="border-b-2 w-[150px] bg-transparent placeholder-[#746e65] text-[#f5dfa5] border-[#6d4d42] text-center"
      />

      {showError && (
        <p className="text-red-500 text-[11px] mt-1 ">
          Please enter a valid number (minimum 10 sqft).
        </p>
      )}

      <div className="mt-2 text-base font-medium text-[#6d4d42]">
        Estimated Price:{' '}
        <span className="font-bold text-[#6d4d42]">₹{estimatedPrice}</span>
      </div>

      <p className="text-[#746e65] text-[10px] my-3 text-center px-5 ">
        Note: This is a rough cost estimate based on a plain ceiling design.
        The final amount may vary depending on the actual design, material
        preferences, site conditions, and additional customization.
      </p>
    </div>
  );
}
