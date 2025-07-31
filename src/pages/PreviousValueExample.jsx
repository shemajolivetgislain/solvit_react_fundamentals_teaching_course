import React, { useState, useEffect, useRef } from "react";

export default function PreviousValueExample() {
  const [name, setName] = useState("");
  const prevNameRef = useRef(""); // 🔁 Stores the previous name

  // ⚠️ Update the ref every time the name changes (but it doesn’t cause re-render)
  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">useRef: Track Previous Value</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
        className="border border-gray-300 p-2 w-full rounded mb-4"
      />

      <p className="text-lg">
        <strong>Current:</strong> {name || "None"}
      </p>
      <p className="text-lg text-gray-600">
        <strong>Previous:</strong> {prevNameRef.current || "None"}
      </p>
    </div>
  );
}
