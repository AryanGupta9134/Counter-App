import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="h-full flex flex-col relative">
      <div className="h-full flex justify-between items-center p-8">
        <button
          onClick={() => setCount(count - 1)}
          className="text-9xl hover:text-gray-600"
        >
          -
        </button>
        <h2 className="text-9xl">{count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="text-9xl hover:text-gray-600"
        >
          +
        </button>
      </div>
      <div className="absolute bottom-20 left-155">
        <button
          onClick={() => setCount(0)}
          className="text-6xl border p-7 rounded-lg hover:bg-gray-900"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
