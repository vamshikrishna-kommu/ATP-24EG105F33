import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-6 m-4 border border-gray-200 rounded-lg shadow-md bg-white max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Count: {count}</h2>
      <div className="flex gap-4">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 transition duration-200 ease-in-out"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
