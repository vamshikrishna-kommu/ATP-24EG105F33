import React from 'react';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <UsersList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
