import { useState, useEffect } from "react";

// API Fetching Demonstration Block
function APIDemo() {
  const [personnel, setPersonnel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    console.log("Effect hook initialized.");
    
    async function fetchPersonnel() {
      setIsLoading(true);
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let peopleData = await response.json();
        
        // Populate state
        setPersonnel(peopleData);
      } catch (err) {
        console.error("Fetch failure:", err);
        setFetchError(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    // Invoke immediately
    fetchPersonnel();
  }, []);

  console.log("Rendering API Demo view.");

  // Conditional rendering for active loads
  if (isLoading) {
    return <p className="text-center text-4xl animate-pulse mt-10">Fetching records...</p>;
  }

  // Handle issues
  if (fetchError != null) {
    return <p className="text-center text-red-500 text-4xl mt-10 font-bold">Error: {fetchError.message}</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-center text-4xl text-teal-600 font-extrabold mb-8 underline">Personnel Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personnel.map(personObj => (
          <div key={personObj.id} className="bg-white p-6 shadow-md rounded-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800">{personObj.name}</h3>
            <p className="text-slate-500 mt-2">{personObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default APIDemo;