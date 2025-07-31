import React, { useRef } from "react";

export default function FocusInputExample() {
  // 1. Create the ref
  const inputRef = useRef(null);

  // 2. Function to focus the input when button is clicked
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">useRef Example: Focus Input</h2>

      {/* 3. Attach the ref to the input element */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        className="border border-gray-300 p-2 w-full rounded mb-4"
      />

      <button
        onClick={handleFocus}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Focus the Input
      </button>
    </div>
  );
}
