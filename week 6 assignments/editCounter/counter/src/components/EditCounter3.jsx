import { useContext } from "react";
import { counterContextObj } from "../context/contextProvider";

function EditCounter3() {
  const { counter, increment, decrement } = useContext(counterContextObj);

  return (
    <div className="border border-gray-300 rounded p-6 w-44 text-center">
      
      <h1 className="text-lg font-semibold text-gray-700 mb-3">
        Counter 3
      </h1>

      <h1 className="text-3xl font-bold mb-4">{counter}</h1>

      <div className="flex justify-center gap-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
      </div>

    </div>
  );
}

export default EditCounter3;