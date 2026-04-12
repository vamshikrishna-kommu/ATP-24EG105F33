import ContextProvider from "./context/contextProvider";
import EditCounter1 from "./components/EditCounter1";
import EditCounter2 from "./components/EditCounter2";
import EditCounter3 from "./components/EditCounter3";
import EditCounter4 from "./components/EditCounter4";

function App() {
  return (
    <ContextProvider>
      <div className="min-h-screen bg-white flex items-center justify-center">
        
        <div className="grid grid-cols-2 gap-6 p-6">
          
          <EditCounter1 />
          <EditCounter2 />
          <EditCounter3 />
          <EditCounter4 />
        
        </div>

      </div>
    </ContextProvider>
  );
}

export default App;