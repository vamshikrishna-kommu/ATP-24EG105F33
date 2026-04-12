import { useState, createContext } from "react"

// Create customized context for counter tracking
export const TrackerContext = createContext();

function AppContextProvider({ children }) {
  // Track numerical value
  const [trackerValue, setTrackerValue] = useState(0);

  // Handlers for state modification
  const handleUp = () => setTrackerValue(prev => prev + 1);
  const handleDown = () => setTrackerValue(prev => prev - 1);

  return (
    <TrackerContext.Provider value={{ trackerValue, handleUp, handleDown }}>
      {children}
    </TrackerContext.Provider>
  )
}

export default AppContextProvider;