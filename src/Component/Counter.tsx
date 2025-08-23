import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  return (
    <div className="h-full flex flex-col relative">
      <div className="h-full flex justify-between items-center p-8">
        <button
          onClick={() => setCount(count - step)}
          className="text-9xl hover:text-gray-600"
          disabled={count === 0}
        >
          -
        </button>
        <h2 className="text-9xl">{count}</h2>
        <button
          onClick={() => setCount(count + step)}
          className="text-9xl hover:text-gray-600"
          disabled={count === 1000}
        >
          +
        </button>
      </div>
      <div className="absolute bottom-20 flex gap-10 items-center w-full justify-center">
        <button
          onClick={() => setCount(0)}
          className="text-6xl border p-7 rounded-lg hover:bg-gray-900"
        >
          Reset
        </button>
        <div>
          <input
            type="number"
            className="text-6xl border p-4 rounded-lg hover:bg-gray-900 w-60 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 "
            placeholder="Steps.."
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
