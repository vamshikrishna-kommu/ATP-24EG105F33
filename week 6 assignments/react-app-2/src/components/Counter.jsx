import { useState } from "react";

// Implementation of Counter App module
function Counter() {
  // Numerical state
  const [tally, setTally] = useState(0);

  // Modifier routines
  const addOne = () => {
    setTally(tally + 1);
  };
  
  const minusOne = () => {
    setTally(tally - 1);
  };
  
  const resetTo = (value) => {
    setTally(value);
  };

  console.log("Triggered counter component mount");
  return (
    <div className="text-center p-12 m-4 border-2 border-slate-300 rounded-lg bg-gray-50">
      <h1 className="text-5xl font-bold mb-6 text-indigo-900">Total Count: {tally}</h1>
      <div className="space-x-4">
        <button onClick={addOne} className="bg-indigo-500 text-white px-4 py-2 rounded text-xl">+</button>
        <button onClick={minusOne} className="bg-rose-500 text-white px-4 py-2 rounded text-xl">-</button>
        <button onClick={() => resetTo(0)} className="bg-gray-400 text-white px-4 py-2 rounded text-xl">Reset</button>
      </div>
    </div>
  )
}

export default Counter;