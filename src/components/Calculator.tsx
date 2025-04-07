import { useState } from "react";
import { add } from "../utils/stringCalculator";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-4"> String Calculator</h1>
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows={4}
        value={input}
        placeholder='Enter "," seperated numbers to add'
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleCalculate}
      >
        Calculate
      </button>

      {result !== null && (
        <p className="mt-4 text-green-600 font-semibold">Result: {result}</p>
      )}

      {error && (
        <p className="mt-4 text-red-500 font-semibold">Error: {error}</p>
      )}
    </div>
  );
}
