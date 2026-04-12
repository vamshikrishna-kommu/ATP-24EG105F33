import MainContent from "./components/Content"
import PageFooter from "./components/Footer"
import PageHeader from "./components/Header"

// Main application container
function App() {
  return (
    <main className="app-container">
      <PageHeader />
      <section className="content-wrapper">
        <MainContent />
      </section>
      <PageFooter />
    </main>
  )
}

export default App