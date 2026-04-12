import { useContext } from "react";
import { TrackerContext } from "../context/contextProvider";

function EditCounter3() {
  const { trackerValue, handleUp, handleDown } = useContext(TrackerContext);

  return (
    <article className="border-2 border-slate-200 rounded-lg p-5 w-48 text-center bg-white shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-medium text-slate-800 mb-2">
        Counter Block 3
      </h2>
      <div className="text-4xl font-extrabold text-slate-900 mb-5">{trackerValue}</div>
      <div className="flex justify-evenly gap-2">
        <button
          onClick={handleUp}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        >
          +
        </button>
        <button
          onClick={handleDown}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        >
          -
        </button>
      </div>
    </article>
  );
}

export default EditCounter3;